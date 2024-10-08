// تعريف خريطة Leaflet
let map = L.map('map').setView([0, 0], 2);

// إضافة طبقة الخرائط
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// قائمة إحداثيات القارات
const continents = {
    africa: [9.1021, 18.2812],
    asia: [34.0479, 100.6197],
    europe: [54.5260, 15.2551],
    'north-america': [54.5260, -105.2551],
    'south-america': [-14.2350, -51.9253],
    australia: [-25.2744, 133.7751],
    antarctica: [-82.8628, 135.0000]
};

// التعامل مع اختيار القارة
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const continent = this.getAttribute('data-continent');
        const coords = continents[continent];
        map.setView(coords, 3);
    });
});
