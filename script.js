/* Base Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    transition: background 0.3s ease, color 0.3s ease;
}

header {
    background: #58a6ff;
    color: white;
    padding: 20px;
    text-align: center;
}

header input {
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    width: 80%;
    max-width: 400px;
}

.current-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, color 0.3s ease;
}

.icon {
    width: 60px;
    height: 60px;
    margin: 10px 0;
}

.icon.sunny {
    background: url('https://img.icons8.com/color/100/000000/sun.png') no-repeat center center;
    background-size: contain;
}

.icon.cloudy {
    background: url('https://img.icons8.com/color/100/000000/cloud.png') no-repeat center center;
    background-size: contain;
}

.icon.rainy {
    background: url('https://img.icons8.com/color/100/000000/rain.png') no-repeat center center;
    background-size: contain;
}

.forecast {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, color 0.3s ease;
}

.forecast-item {
    text-align: center;
}

footer {
    text-align: center;
    padding: 10px;
}

button {
    background: #20c997;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #18a689;
}

/* Light Mode */
.light-mode {
    background: linear-gradient(to bottom, #a2d5f2, #ffffff);
    color: #333333;
}

/* Dark Mode */
.dark-mode {
    background: linear-gradient(to bottom, #2c3e50, #000000);
    color: #f0f0f0;
}

.dark-mode .current-weather, .dark-mode .forecast {
    background: #34495e;
}

.dark-mode button {
    background: #34495e;
}

.dark-mode button:hover {
    background: #2c3e50;
}
