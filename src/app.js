const derajatInput = document.getElementById('derajat-awal');
const tipeTempAwalSelect = document.getElementById('tipe-temp-awal');
const tipeTempAkhirSelect = document.getElementById('tipe-temp-akhir');
const hasilDerajat = document.getElementById('derajat-akhir');
const rumusElement = document.getElementById('rumus');

function convertTemperature() {

    const inputDerajat = parseFloat(derajatInput.value);
    const tipeTempAwal = tipeTempAwalSelect.value;
    const tipeTempAkhir = tipeTempAkhirSelect.value;

    let hasil;
    let rumus;
    switch (tipeTempAwal) {
        case 'celcius':
            [hasil, rumus] = convertCelciusTo(tipeTempAkhir, inputDerajat);
            break;
        case 'fahrenheit':
            [hasil, rumus] = convertFahrenheitTo(tipeTempAkhir, inputDerajat);
            break;
        case 'kelvin':
            [hasil, rumus] = convertKelvinTo(tipeTempAkhir, inputDerajat);
            break;
        default:
            hasil = 'Invalid input';
            rumus = '';
    }

    hasilDerajat.textContent = hasil;
    rumusElement.textContent = rumus;
}

function convertCelciusTo(targetType, value) {
    let rumus;
    if (targetType === 'fahrenheit') {
        rumus = `(${value} °C x 9/5) + 32 = ${((value * 9/5) + 32).toFixed(2)} °F`;
        return [((value * 9/5) + 32).toFixed(2), rumus];
    } else if (targetType === 'kelvin') {
        rumus = `${value} °C  + 273.15 = ${(value + 273.15).toFixed(2)} °K`;
        return [(value + 273.15).toFixed(2), rumus];
    } else {
        return [value, 'Tidak perlu dikonversikan'];
    }
}

function convertFahrenheitTo(targetType, value) {
    let rumus;
    if (targetType === 'celcius') {
        rumus = `(${value} °F - 32) x 5/9 = ${((value - 32) * 5/9).toFixed(2)} °C`;
        return [((value - 32) * 5/9).toFixed(2), rumus];
    } else if (targetType === 'kelvin') {
        rumus = `(${value} °F - 32) x 5/9 +273.15 = ${(((value - 32) * 5/9) + 273.15).toFixed(2)} °K`;
        return [(((value - 32) * 5/9) + 273.15).toFixed(2), rumus];
    } else {
        return [value, 'Tidak perlu dikonversikan'];
    }
}

function convertKelvinTo(targetType, value) {
    let rumus;
    if (targetType === 'celcius') {
        rumus = `${value} °K - 273.15 = ${(value - 273.15).toFixed(2)} °C`;
        return [(value - 273.15).toFixed(2), rumus];
    } else if (targetType === 'fahrenheit') {
        rumus = `(${value} °K - 273.15) x 9/5 +32 = ${(((value - 273.15) * 9/5) + 32).toFixed(2)} °F`;
        return [(((value - 273.15) * 9/5) + 32).toFixed(2), rumus];
    } else {
        return [value, 'Tidak perlu dikonversikan'];
    }
}

const konversiButton = document.querySelector('button');
konversiButton.addEventListener('click', convertTemperature);
