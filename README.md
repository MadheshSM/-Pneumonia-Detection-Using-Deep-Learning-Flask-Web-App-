🩺 Pneumonia Detection Using Deep Learning (Flask Web App)

This project is an **AI-powered Chest X-ray Pneumonia Detection System** built using:

* **TensorFlow / Keras** (CNN Model)
* **Flask Web Application**
* **PDF Report Generator** (ReportLab)
* **Interactive Chatbot Assistant**
* **Confidence Visualization Chart (Matplotlib)**

The system allows users to upload a **Chest X-ray**, and the AI model predicts whether the patient is **NORMAL** or has **PNEUMONIA**, along with confidence levels.

A professional **PDF medical-style report** is generated for download.

---

## ⭐ Features

### 🔍 Pneumonia Prediction

* Upload any chest X-ray image
* Model predicts: **NORMAL** or **PNEUMONIA**
* Shows **confidence percentage**
* Displays uploaded image on the result page

### 📄 Auto PDF Report Generation

The PDF includes:

* Patient details
* Uploaded X-ray image
* AI diagnosis
* Confidence chart
* Timestamp
* Medical disclaimer

### 🤖 Built-in Chatbot

Ask questions like:

* *“What is pneumonia?”*
* *“How do I download my report?”*
* *“Show my last prediction”*

### 📊 Confidence Visualization

Horizontal bar graph generated using Matplotlib.

### 🖥️ User-friendly Web Interface

Simple form to upload images + chatbot panel.

---

# 📂 Project Structure

```
Pneumonia-Detection-AI/
│── app.py
│── newt.py
│── our_model.h5   (optional)
│── requirements.txt
│── README.md
│
├── templates/
│     └── index.html
│
├── static/
│     ├── style.css
│     └── script.js
│
├──Pneumonia_Detection_using_Deep_Learning.ipynb
│
├── uploads/      (auto-created)
├── reports/      (auto-created)
└── .gitignore
```

---

# 🚀 How to Run Locally
### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Flask App

```bash
python app.py
```

### 4️⃣ Open in Browser

```
http://127.0.0.1:5000/
```

Upload an X-ray → View prediction → Download report.

---

# 🧠 Model Details

* Trained on **Chest X-ray (Pneumonia)** dataset
* Input size: **224×224**
* Uses CNN architecture
* Outputs: **NORMAL** / **PNEUMONIA**
* Probability converted into confidence (%)
* Model adjusts extremely high confidence values to avoid unrealistic 100% outputs

---

# 📄 PDF Report Example Includes:

* Patient name, age, gender
* Timestamp
* X-ray preview
* AI prediction
* Confidence %
* Confidence chart
* Disclaimer

---

# 💬 Chatbot Capabilities

The chatbot can answer:

* “Hello / Hi”
* “What is pneumonia?”
* “How to upload X-ray?”
* “Where is my report?”
* “Show my last result”

---

# 🧾 Requirements (summary)

```
Flask
tensorflow
numpy
matplotlib
reportlab
Pillow
werkzeug
```

Full version in `requirements.txt`.

---

# 🔒 Important Notes

* This project is for **research and educational purposes only**.
* It is **NOT** a medical-grade diagnostic tool.
* Always consult certified medical professionals for actual diagnosis.

---

# 🤝 Contributing

Pull requests are welcome!
For major changes, open an issue to discuss your ideas.

---

# 🌟 Acknowledgements

* Chest X-ray Dataset (Pneumonia)
* TensorFlow / Keras
* Flask Framework
* ReportLab for PDF generation
