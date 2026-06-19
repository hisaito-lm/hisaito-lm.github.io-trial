var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_N0320240101_13_1 = new ol.format.GeoJSON();
var features_N0320240101_13_1 = format_N0320240101_13_1.readFeatures(json_N0320240101_13_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N0320240101_13_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N0320240101_13_1.addFeatures(features_N0320240101_13_1);
var lyr_N0320240101_13_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N0320240101_13_1, 
                style: style_N0320240101_13_1,
                popuplayertitle: 'N03-20240101_13',
                interactive: true,
                title: '<img src="styles/legend/N0320240101_13_1.png" /> N03-20240101_13'
            });
var format_P3414_13_2 = new ol.format.GeoJSON();
var features_P3414_13_2 = format_P3414_13_2.readFeatures(json_P3414_13_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P3414_13_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P3414_13_2.addFeatures(features_P3414_13_2);
var lyr_P3414_13_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P3414_13_2, 
                style: style_P3414_13_2,
                popuplayertitle: 'P34-14_13',
                interactive: true,
                title: '<img src="styles/legend/P3414_13_2.png" /> P34-14_13'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_N0320240101_13_1.setVisible(true);lyr_P3414_13_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_N0320240101_13_1,lyr_P3414_13_2];
lyr_N0320240101_13_1.set('fieldAliases', {'N03_001': 'N03_001', 'N03_002': 'N03_002', 'N03_003': 'N03_003', 'N03_004': 'N03_004', 'N03_005': 'N03_005', 'N03_007': 'N03_007', });
lyr_P3414_13_2.set('fieldAliases', {'P34_001': 'P34_001', 'P34_002': 'P34_002', 'P34_003': 'P34_003', 'P34_004': 'P34_004', });
lyr_N0320240101_13_1.set('fieldImages', {'N03_001': 'TextEdit', 'N03_002': 'TextEdit', 'N03_003': 'TextEdit', 'N03_004': 'TextEdit', 'N03_005': 'TextEdit', 'N03_007': 'TextEdit', });
lyr_P3414_13_2.set('fieldImages', {'P34_001': '', 'P34_002': '', 'P34_003': '', 'P34_004': '', });
lyr_N0320240101_13_1.set('fieldLabels', {'N03_001': 'no label', 'N03_002': 'no label', 'N03_003': 'no label', 'N03_004': 'no label', 'N03_005': 'no label', 'N03_007': 'inline label - visible with data', });
lyr_P3414_13_2.set('fieldLabels', {'P34_001': 'no label', 'P34_002': 'no label', 'P34_003': 'no label', 'P34_004': 'no label', });
lyr_P3414_13_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});