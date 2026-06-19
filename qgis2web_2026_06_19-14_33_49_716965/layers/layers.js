var wms_layers = [];


        var lyr_https_0 = new ol.layer.Tile({
            'title': 'https:',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_123_1 = new ol.layer.Tile({
            'title': '123',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/ndvi_250m_{西暦}_{月}/{z}/{x}/{y}.png'
            })
        });
var format_N0320240101_13_2 = new ol.format.GeoJSON();
var features_N0320240101_13_2 = format_N0320240101_13_2.readFeatures(json_N0320240101_13_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N0320240101_13_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N0320240101_13_2.addFeatures(features_N0320240101_13_2);
var lyr_N0320240101_13_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_N0320240101_13_2, 
                style: style_N0320240101_13_2,
                popuplayertitle: 'N03-20240101_13',
                interactive: true,
                title: '<img src="styles/legend/N0320240101_13_2.png" /> N03-20240101_13'
            });
var format_P3414_13_3 = new ol.format.GeoJSON();
var features_P3414_13_3 = format_P3414_13_3.readFeatures(json_P3414_13_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P3414_13_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P3414_13_3.addFeatures(features_P3414_13_3);
var lyr_P3414_13_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P3414_13_3, 
                style: style_P3414_13_3,
                popuplayertitle: 'P34-14_13',
                interactive: true,
                title: '<img src="styles/legend/P3414_13_3.png" /> P34-14_13'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '道路調査ポイント',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 道路調査ポイント'
            });

lyr_https_0.setVisible(true);lyr_123_1.setVisible(true);lyr_N0320240101_13_2.setVisible(true);lyr_P3414_13_3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_https_0,lyr_123_1,lyr_N0320240101_13_2,lyr_P3414_13_3,lyr__4];
lyr_N0320240101_13_2.set('fieldAliases', {'N03_001': 'N03_001', 'N03_002': 'N03_002', 'N03_003': 'N03_003', 'N03_004': 'N03_004', 'N03_005': 'N03_005', 'N03_007': 'N03_007', });
lyr_P3414_13_3.set('fieldAliases', {'P34_001': 'P34_001', 'P34_002': 'P34_002', 'P34_003': 'P34_003', 'P34_004': 'P34_004', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'status': 'status', 'memo': 'memo', });
lyr_N0320240101_13_2.set('fieldImages', {'N03_001': 'TextEdit', 'N03_002': 'TextEdit', 'N03_003': 'TextEdit', 'N03_004': 'TextEdit', 'N03_005': 'TextEdit', 'N03_007': 'TextEdit', });
lyr_P3414_13_3.set('fieldImages', {'P34_001': '', 'P34_002': '', 'P34_003': '', 'P34_004': '', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'status': 'ValueMap', 'memo': 'TextEdit', });
lyr_N0320240101_13_2.set('fieldLabels', {'N03_001': 'no label', 'N03_002': 'no label', 'N03_003': 'no label', 'N03_004': 'no label', 'N03_005': 'no label', 'N03_007': 'no label', });
lyr_P3414_13_3.set('fieldLabels', {'P34_001': 'no label', 'P34_002': 'no label', 'P34_003': 'no label', 'P34_004': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'status': 'no label', 'memo': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});