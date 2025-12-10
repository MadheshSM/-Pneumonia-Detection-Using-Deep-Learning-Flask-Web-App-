from tensorflow.keras.models import load_model
import numpy as np

model = load_model("our_model.h5")

# Create a dummy input
dummy = np.random.rand(1, 224, 224, 3)
prediction = model.predict(dummy)
print("Model output shape:", prediction.shape)
print("Model raw output:", prediction)
