---
date: '2024-02-22T10:50:54.000Z'
title: Scenery Classification - Nebula 1.0
tagline: 13th February, 2024
preview: >-
  I built a scenery classification model using a TensorFlow CNN with Keras. Powered by a dataset of 31,000 images, Nebula 1.0 can classify images as buildings, forests, glaciers, mountains, seas, or streets with 80% accuracy.
image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg'
---

You can find the project here at [Github](https://github.com/nhat2605/scenary_classification).

# Motivation

This project started as an experiment to see how fast my new Graphics Card could handle AI training compared to my MacBook. What began as just a bit of fun soon showed promise, and I decided to push the boundaries. Three months later, I'm thrilled to present my findings!

In this blog post, I'll guide you through the journey of developing the model and share some crucial insights gained along the way.

# Initial Thought Process

My goal was clear that is to train something chunky using my GPU. Then I thought of why not do something with computer vision, just because. However, I did not want to start from scratch, therefore I went to look for a project that have already done something similar, swap out the data, reconfigure here and there and then train the AI.

Here is where I came across this [Image Recognition Project](https://www.tensorflow.org/tutorials/images/classification) by TensorFlow. If you are not familiar with TensorFlow, it is a free and open-source software library for Machine Learning by Google.

In their project, they try to recognise different flower types like daisy, dandelion, roses, etc. This was perfect for what I wanted to do (, I thought, ) so I got right into making this my own project.

My thought process then is that, I already have the framework, now I just need to replace the images with my own, do some simple coding and watch the machine do its thing.

# Data Collection

To begin with, my initial hurdle was to gather appropriate pictures for training. I started with some images from Kaggle and then grew my collection from 14,000 to 31,000 pictures.

Expanding my dataset was somewhat challenging, which is why the model's ability to identify categories might seem random; these categories had the most images available. I also encountered an issue where many images didn't accurately reflect their supposed category. For instance, pictures labeled as 'street' often contained buildings, and similarly, those meant to represent 'buildings' sometimes included street views.

# Configuration

Next, I configured the model. A lot of the work into cleaning and data transformation into usable format have already been done so I will leave these aside. I would also recommend you have a read at TensorFlow to see the specifics as they will probably explain better than I can. The configuration I made was more in the model, specifically this part:

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
        layers.Dense(128, activation='relu'),  # Reduced dense layer units
        layers.Dense(num_classes, activation='softmax', name="outputs")  # Softmax for multi-class classification
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

This is what you call a Neural Network. To give you a quick rundown, a neural network is a model inspired by the biological neural networks in a human brain. Here is a quote on wiki that I think excellently explains how it works:
> An Artificial Neural Network (ANN) is made of connected units or nodes called artificial neurons, which loosely model the neurons in a brain. These are connected by edges, which model the synapses in a brain. An artificial neuron receives signals from connected neurons, then processes them and sends a signal to other connected neurons.

Now that you have the definition, let’s have a look at the structure of how our neural network might look like:
![Deep Neural Network](https://cf-assets.www.cloudflare.com/slt3lc6tev37/1wkNx98skWwkKAw2XExpQe/33505b0b82e3156fc042bca42a1a2034/neural-network-diagram.png)

To simply explain this, let's go back to our normal senses. Do you ever wonder why when you look at something like a cat, you know that it is a cat and not a dog instantly? Well, that's because your brain has been trained over time to recognize shapes, sizes, and patterns that distinguish cats from dogs. Now, imagine if we could teach a computer to do the same thing, but instead of using cookies and milk as rewards, we use data and algorithms. That's essentially what a neural network does.

Just like how you learned to tell cats and dogs apart, a neural network learns by being shown thousands, if not millions, of pictures of cats and dogs. Each time it guesses correctly, it gets a little 'digital pat on the back' (aka, it adjusts its internal settings to remember what the right answer looks like). And when it’s wrong? Well, it does the digital equivalent of going back to the drawing board to figure out why that fluffy creature with the mischievous smile was not a small, barky dog but indeed a cat.

So basically, there are 4 main changes. First, I add the use of ```py tf.distribute.MirroredStrategy()```. This basically tell TensorFlow that I want to use my GPU for training, as its default is to use the CPU.

# Training

# Result

# What's Next

## Blockquote

> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

## Ordered List with horizontal line

1. First item
2. Second item
3. Third item
4. Fourth item

---

## Unordered List With Horizontal line

- First item
- Second item
- Third item
- Fourth item

---


## Images

![An old rock in the desert](https://content.openaiusercontent.com/file-YNVpjeRtOdj371Ri19IyMQqF)
