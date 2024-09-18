    let model;
    async function loadModel() {
        model = await tf.loadGraphModel('tfjs_model/model.json');
        console.log('Model berhasil diload')
    }

    async function predictImage(imageElement) {
        const img = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([64, 64]).toFloat().expandDims(0);
        const offset = tf.scalar(0.5);
        img.sub(offset).div(offset).expandDims(0);

        const predictions = await model.predict(img).data();

        const labels = ['bottomwear', 'footwear', 'upperwear']
        const maxIndex = predictions.indexOf(Math.max(...predictions));
        const predictedLabel = labels[maxIndex];

        document.getElementById('result').innerText = `Prediksi: ${predictedLabel}`;
    }

    document.getElementById('imageInput').addEventListener('change', (event)=>{
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imgElement = document.getElementById('uploadedImage');
                imgElement.src = e.target.result;
                imgElement.onload = () => predictImage(imgElement);
            };
            reader.readAsDataURL(file);
        }
    });

    window.onload = loadModel