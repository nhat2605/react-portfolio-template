---
date: '2024-04-22T10:50:54.000Z'
title: Scenery Classification - Nebula 1.0
tagline: 22th April, 2024
preview: >-
  I built a scenery classification model using a TensorFlow CNN with Keras. Powered by a dataset of 31,000 images, Nebula 1.0 can classify images as buildings, forests, glaciers, mountains, seas, or streets with 80% accuracy.
image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg'
---

You can find the project here at [Github](https://github.com/nhat2605/scenary_classification).

# Motivation

This project started as an experiment to see how fast my new Graphics Card could handle AI training compared to my MacBook. What began as just a bit of fun soon showed promise, and I decided to push the boundaries. Three months later, I'm thrilled to present my findings!

In this blog post, I'll guide you through the journey of developing the model and share some crucial insights gained along the way.

# The "Why?"

So, you might be wondering, what's so special about a graphics card that it warrants dedicating an entire project to it? And why a graphics card, aren't they just for gaming and fancy visuals?

Well, it turns out that graphics cards, or GPUs, are not just about boosting frame rates in video games. They're actually powerhouse performers when it comes to the kind of heavy lifting required in training neural networks. You see, while CPUs—the typical brains of your computer—are great at doing a broad range of tasks sequentially, they hit a bit of a slog when asked to handle the gargantuan, parallel tasks that machine learning models demand.

A GPU, on the other hand, is like having an entire team working in sync. Originally designed for rendering graphics, GPUs excel at processing many computations at once. They split the heavy computational load of training models across potentially thousands of smaller cores, making the process exponentially faster. This means less time waiting for models to train and more time for refining and experimenting. So, not only is the project using a GPU practical, it's like unlocking a new level of performance that a CPU alone could never reach.

# Initial Thought Process

My goal was clear that is to train something chunky using my GPU. Then I thought of why not do something with computer vision, just because. However, I did not want to start from scratch, therefore I went to look for a project that have already done something similar, swap out the data, reconfigure here and there and then train the AI.

Here is where I came across this [Image Recognition Project](https://www.tensorflow.org/tutorials/images/classification) by TensorFlow. If you are not familiar with TensorFlow, it is a free and open-source software library for Machine Learning by Google.

In their project, they try to recognise different flower types like daisy, dandelion, roses, etc. This was perfect for what I wanted to do so I got right into making this my own project.

My thought process then is clear, I already have the framework, now I just need to replace the images with my own, do some simple coding and watch the machine do its thing.

# Data Collection

To begin with, my initial hurdle was to gather appropriate pictures for training. I started with some images from Kaggle and then grew my collection from 14,000 to 28,000 pictures.

Expanding my dataset was somewhat challenging, which is why the model's ability to identify categories might seem random; these categories had the most images available. I also encountered an issue where many images didn't accurately reflect their supposed category. For instance, pictures labeled as 'street' often contained buildings, and similarly, those meant to represent 'buildings' sometimes included street views.

# Configuration

My next step was to configure the model. A lot of the work into cleaning and data preprocessing have already been done so I will leave these aside. I would also recommend you have a read at [TensorFlow](https://www.tensorflow.org/tutorials/images/classification) to see the specifics as they will probably explain better than I can. The configuration I made was more in the model, specifically this part:

```py
num_classes = len(class_names)
strategy = tf.distribute.MirroredStrategy()
with strategy.scope():
    model = Sequential([
        data_augmentation,
        layers.Rescaling(1./255),

        # First Conv Block
        layers.Conv2D(32, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),

        # Second Conv Block
        layers.Conv2D(64, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),

        # Classifier
        layers.Flatten(),
        layers.Dense(128, activation='relu'), 
        layers.Dense(num_classes, activation='softmax', name="outputs") 
    ])
```

Compared to the original:

```py
model = Sequential([
  data_augmentation,
  layers.Rescaling(1./255),
  layers.Conv2D(16, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(32, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Conv2D(64, 3, padding='same', activation='relu'),
  layers.MaxPooling2D(),
  layers.Dropout(0.2),
  layers.Flatten(),
  layers.Dense(128, activation='relu'),
  layers.Dense(num_classes, name="outputs")
])
```

## Neural Network
At this point, you must be wondering what did you just read. We will come back to the code later, for now, lets focus on the basics. This is what you call a Neural Network. To give you a quick rundown, a neural network is a model inspired by the biological neural networks in a human brain. Here is a definition on wiki that I think excellently explains how it works:
> An Artificial Neural Network is made of connected units or nodes called artificial neurons, which loosely model the neurons in a brain. These are connected by edges, which model the synapses in a brain. An artificial neuron receives signals from connected neurons, then processes them and sends a signal to other connected neurons.

Now that we got the definition out of the way, let’s have a look at the structure of how our neural network might look like:
![Deep Neural Network](https://cf-assets.www.cloudflare.com/slt3lc6tev37/1wkNx98skWwkKAw2XExpQe/33505b0b82e3156fc042bca42a1a2034/neural-network-diagram.png)

Do you ever wonder why when you look at something like a cat, you know that it is a cat and not a dog instantly? Well, that's because your brain has been trained over time to recognize shapes, sizes, and patterns that distinguish cats from dogs. 

Just like how you learned to tell cats and dogs apart, a neural network learns by being shown thousands, if not millions, of pictures of cats and dogs. Each time it guesses correctly, it gets a little 'digital pat on the back' (aka, it adjusts its internal settings to remember what the right answer looks like). And when it’s wrong? Well, it does the digital equivalent of going back to the drawing board to figure out why that fluffy creature with the mischievous smile was not a small, barky dog but indeed a cat.

This mechanism is deeply intertwined with the concept of adjusting the hidden layers, which act as the network's method of refining its 'thought' processes.

When a neural network successfully identifies an image correctly, say distinguishing a cat from a dog, it receives a reward. This reward is essentially a positive reinforcement signal that tells the network to adjust the weights of the connections in its hidden layers. These adjustments are akin to strengthening the pathways in the human brain that lead to correct recognition. The hidden layers, each responsible for capturing different levels of abstraction and features from the input data, are fine-tuned to enhance their predictive accuracy based on what has worked in the past.

Conversely, when the network made an error, it experiences a form of punishment—no literal scolding, but rather a corrective feedback that adjusts its internal settings away from the error. This is akin to a mental note in human learning where one revises understanding based on mistakes. The hidden layers adjust their configurations slightly to decrease the likelihood of repeating the same mistake, thus improving the network's overall ability to distinguish complex patterns and subtleties in future data inputs.

Through this dynamic of rewards and punishment, the neural network's hidden layers evolve, becoming increasingly sophisticated in their function, much like how continuous learning sharpens human perception and decision-making skills.

## Changes
Back to the adjustments I've made to the architecture of the neural network. If it seemed complex, don't fret—I'll be demystifying everything for you.

### TensorFlow setup 

The model commences with a process known as data_augmentation. This entails presenting the neural network with a range of images captured under varying lighting conditions, angles, or slightly altered appearances. Such diversification aids the network in developing proficiency in recognising objects, regardless of how they are depicted.
![Image Alteration](https://i.pinimg.com/originals/ad/80/d0/ad80d0768d862b807c6cdd3800dc8aa7.webp)
Following this is the application of `layers.Rescaling(1./255)`. This step focuses on standardising the input data. Given that image data typically spans from 0 to 255, represented as RGB (Red-Green-Blue) values in this instance, rescaling it to a range of 0 to 1 facilitates the network's processing. It's akin to breaking down a complex problem into smaller, more manageable components.

Subsequently, the model incorporates several layers including `Conv2D` and `MaxPooling2D`. These layers serve as filters, enabling the network to concentrate on pertinent details while disregarding extraneous noise. Each `Conv2D` layer identifies specific features such as edges, textures, or shapes within the image, with the complexity and specificity increasing across successive layers. The subsequent `MaxPooling2D` layers complement each convolution layer, aiding in the reduction of feature data size, thereby enhancing the network's speed and efficiency by focusing on the most significant detected features.

`layers.Dropout(0.2)` is employed as a strategic measure to mitigate the risk of the network becoming overly fixated on the training data, a phenomenon known as overfitting. By randomly disregarding a portion of neuron connections during training (in this instance, 20% of them), it ensures that the network maintains robustness and generalisation, akin to studying with open-book tests to foster understanding rather than mere memorisation.

Finally, subsequent to flattening all detected features into a singular elongated vector via `layers.Flatten()`, the network utilises `layers.Dense` layers to make decisions. The initial Dense layer with 128 units marks the point at which the network begins to infer the probable representation of the image by amalgamating all the recognised features. The ultimate `Dense layer`, named "outputs", determines the precise category of the image, such as discerning whether it depicts a cat, a dog, or any other category for which the network has been trained to recognise.

### My Approach

In my approach to building the neural network, I've tailored it to be more efficient. Here's how I've set it up:

Firstly, I determine the number of classes the network needs to recognise with `num_classes = len(class_names)`. This simply establishes the number of potential outcomes the network must be able to classify.

To ensure that the model trains efficiently on a system with a GPU, I use `strategy = tf.distribute.MirroredStrategy()`. This strategy allows the model to duplicate itself on each GPU, sharing the load and synchronising the updates across all replicas. It's akin to having several study groups simultaneously learning different parts of the same subject and then sharing their insights with each other.

Within the scope of this strategy, I begin building the model. I start with `data_augmentation` and `layers.Rescaling(1./255)`, just like in the original setup, to prepare and standardise the input images. Data augmentation ensures the model sees varied versions of the same image, reducing overfitting and making the model robust to changes in input.

Then, I structure the convolutional blocks to capture features. I've adjusted the first convolutional layer to start with 32 filters and then expand to 64 filters in the second block. Each convolutional block is followed by `layers.MaxPooling2D()`, which helps in reducing the spatial dimensions of the output from the previous layer, thereby reducing the number of parameters and computation in the network. This step is crucial as it focuses on the most relevant features by simplifying the input further each time.

The final part of the model, which I call the Classifier, begins with `layers.Flatten()` to convert the multi-dimensional output of the previous layers into a single long vector. This vector is then processed through a `layers.Dense` layer with 128 units, slightly reduced from the more typical larger layers to streamline the model while maintaining sufficient complexity for decision-making. Lastly, I use a `layers.Dense` layer with a 'softmax' activation function for the output. The `softmax` activation is ideal for multi-class classification, as it turns the numerical outputs into probabilities that sum to one, effectively allowing the model to pick the most likely class among the several classes.

# Result

In machine learning, we celebrate the milestones of a neural network's education through its performance over epochs, or iterations of training which means how many time we feed the whole training data to the model. After a 45-epoch workout, the model has achieved commendable results, boasting a training accuracy of 93.26% on the last lap. This high level of accuracy is indicative of the model's proficiency in identifying patterns and making correct predictions based on the training data it's been fed. On the flip side, the validation accuracy—a measure of how well our educated network can apply its learning to new, unseen data—stands at 80.15% at the final epoch.

![Result](https://i.pinimg.com/originals/31/90/1f/31901fa1655ae67faf2053006b2c7b0b.png)

Now, peering into the graphical story of the model's journey, we observe the blue line of training accuracy ascending steadily, a testament to the network's growing intelligence. The validation accuracy, depicted in orange, shows a more undulating journey, reflective of the real-world challenges and the diversity of unseen data it encounters. The graphs also tell a tale of loss—training loss, that is. Here, we see a plummeting blue line, signalling that the model is getting better at reducing errors during training, with the final figure standing at a meager 0.1881.

However, as is often the case in the twist and turns of machine learning, our model, while a keen learner, shows signs of overfitting. The validation loss, initially in step with the training loss, begins to climb, peaking at 0.8483. This divergence between training and validation loss suggests that while our model is acing the training exams, it's not quite as adept when faced with the unexpected questions of the validation set.

Taking the model out for a final test, away from the comfort of the training and validation sets, it scores 78% on the testing set. This final figure, a modest dip from the validation accuracy, raises the curtain on the practical application of our model: a robust performer but with room for growth, much like a bright student who excels in the classroom yet still finds new situations a test of their mettle.

On a side note, each epoch takes around 10 seconds to run. This is a massive success where compared to CPU performance, it is a whopping 6 times faster. 

All in all, the graphs and figures weave a narrative of triumph, where the model attained commendable accuracy. It's not the epitome of perfection, but it stands as a promising foundation, with much opportunity for refinement and enhancement.

# What's Next

If you are interested, I've made this model readily available for you to experiment with under [Playground](https://nhatcb.com/playground). The site might still need some tinkering as I'm pretty sure it does not fully support smaller screens, or anything smaller than a cinema display for that matter. However, on the good side, rest assured that there's no data hoarding happening here; storage costs are as welcome as a skunk at a lawn party, and this website is running on the fumes of my own wallet—a true labour of love, funded by the loose change found under my sofa cushions.

If you've made it all the way here, thank you so much for taking the time to read this. It truly means the world to me. Since this is my first blog, please don't hesitate to reach out on any platform with your comments, feedback, or even just to say hi (I promise, I won't bite!). I've got another blog on the horizon about Fake News Classification, a group project I tackled in 2023, so please stay tuned for that. For now, I'll catch you next time. ✨