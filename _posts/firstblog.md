---
date: '2024-02-22T10:50:54.000Z'
title: Scenery Classification - Nebula 1.0
tagline: This is a Tagline If you want to add.
preview: >-
  I built a scenery classification model using a TensorFlow CNN with Keras. Powered by a dataset of 31,000 images, Nebula 1.0 can classify images as buildings, forests, glaciers, mountains, seas, or streets with 80% accuracy.
image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg'
---

# Heading One

This project began as a way to test the speed of my new GPU for AI training compared to my MacBook. Initially a fun experiment, I quickly realized its potential and decided to take it further. After three months of development, I'm excited to share it with you!

In this blog, I'll walk you through the model development process, share some key lessons learned, and provide a section where you can try it out.

# Heading Tưo

To start, my first challenge was finding suitable images for training. I expanded my dataset from 14,000 to 31,000 images. However, obtaining clean data was difficult. Many images weren't purely representative of their category. For example, street images often included buildings, and vice versa. This initially caused some confusion for the model.

Next, I configured the model. This involved preparing the image data for the neural network, defining the network's architecture, and fitting the data to the model. Images were converted to RGB values and scaled from 0-255 to 0-1 for better network performance.

#### This is Heading Four With Code Block

```jsx
<code className={className} {...props}>
  {children}
</code>
```

## BLockquote

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

## Links

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

## Images

![An old rock in the desert](https://images.unsplash.com/photo-1654475677192-2d869348bb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
