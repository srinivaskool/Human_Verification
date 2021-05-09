# Human Verification

![Project Image](README_IMAGES\demo.gif)

<br />

> Using Deep Learning on MNIST dataset to build Human-Verification website

---

### Table of Contents

- [Description](#description)
- [Analysis and Process](#Analysis-and-Process)
- [Results](#results)
- [Project Layout](#project-layout)
- [References](#references)
- [Author Info](#author-info)

---

## Description

<br>

In this website, we ask the user to enter three random digits, and using Deep Learning on the MNIST dataset we validate the numbers drawn by the user. This is a 3-hidden layer neural network along with input and output layer. All the layers use the ReLU as an activation function except the last layer which is softmax as we need to classify so we want to get probabilities in the last step to determine the highest probability as the predicted digit. I am using Adam Optimizer and for the loss function, I am using the softmax cross-entropy function.

<br>

### Live Demo - [Human Verification Portal](https://srinivaskool.github.io/Human_Verification/)

<br>

### Technologies

- TensorFlow
- OpenCV
- JavaScript

---

## Analysis and Process

<p align="center">
  <img  src="README_IMAGES\Dataset_analysis.png" width="250" > 
</p>
<p align="center">
  <img  src="README_IMAGES\Dataset_Splitting.png" width="250" > 
</p>

## Neural Network

<p align="center">
  <img  src="README_IMAGES\NN.png" width="250" > 
</p>
<p align="center">
  <img  src="README_IMAGES\Final-Hyperparameters.png" width="250" > 
</p>

#### [Back To The Top](#Human-Verification)

---

## Results

- Accuracy on Test Dataset is <b> 97.23% </b>.
  <br/>
  <br/>

<p align="center">
  <img  src="README_IMAGES\Performance-Accurance.png" width="250" > 
  <img  src="README_IMAGES\Notation.png" width="150" > 
  <img  src="README_IMAGES\Performance-Cost.png" width="250" > 
</p>
<p align="center">
  <img  src="README_IMAGES\Confusion_Matrix.png" width="250" > 
</p>
<p align="center">
  <img  src="README_IMAGES\Result.png" width="250" > 
</p>

<br>
### Successful Test cases on Website.
<br >
<br>
<p align="center">
<img  src="README_IMAGES\Website_Test_Cases.png" width="250" > 
</p>

#### [Back To The Top](#Human-Verification)

---

## Project Layout

```
.
|-- Model
|   |-- group1-shard1of1.bin
|   `-- model.json
|-- README.md
|-- README_IMAGES
|   |-- Confusion_Matrix.png
|   |-- Dataset_Splitting.png
|   |-- Dataset_analysis.png
|   |-- Final-Hyperparameters.png
|   |-- NN.png
|   |-- Notation.png
|   |-- Performance-Accurance.png
|   |-- Performance-Cost.png
|   |-- Result.png
|   |-- Website_Test_Cases.png
|   `-- image8.gif
|-- canvas-drawing.js
|-- index.html
|-- opencv.js
|-- predictor.js
`-- validator.js

```

---

## References

- [MNIST](http://yann.lecun.com/exdb/mnist/)
- [OpenCV](http://docs.opencv.org/)

#### [Back To The Top](#Human-Verification)

---

## Author Info

- LinkedIn - [Srinivas K](https://www.linkedin.com/in/srinivas-konduri/)

#### [Back To The Top](#Human-Verification)
