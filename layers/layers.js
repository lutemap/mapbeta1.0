var wms_layers = [];


        var lyr_ESRIWorldStreetMap_0 = new ol.layer.Tile({
            'title': 'ESRI “World Street Map”',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Description_1 = new ol.format.GeoJSON();
var features_Description_1 = format_Description_1.readFeatures(json_Description_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Description_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Description_1.addFeatures(features_Description_1);
var lyr_Description_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Description_1, 
                style: style_Description_1,
                popuplayertitle: 'Description',
                interactive: true,
                title: '<img src="styles/legend/Description_1.png" /> Description'
            });

lyr_ESRIWorldStreetMap_0.setVisible(true);lyr_Description_1.setVisible(true);
var layersList = [lyr_ESRIWorldStreetMap_0,lyr_Description_1];
lyr_Description_1.set('fieldAliases', {'id': 'id', 'isim': 'isim', 'enlem': 'enlem', 'boylam': 'boylam', 'aciklama': 'aciklama', });
lyr_Description_1.set('fieldImages', {'id': 'Range', 'isim': 'TextEdit', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'aciklama': 'TextEdit', });
lyr_Description_1.set('fieldLabels', {'id': 'hidden field', 'isim': 'hidden field', 'enlem': 'hidden field', 'boylam': 'hidden field', 'aciklama': 'no label', });
lyr_Description_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});