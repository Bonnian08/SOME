var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_COM_NANDO_1 = new ol.format.GeoJSON();
var features_COM_NANDO_1 = format_COM_NANDO_1.readFeatures(json_COM_NANDO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COM_NANDO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COM_NANDO_1.addFeatures(features_COM_NANDO_1);
var lyr_COM_NANDO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COM_NANDO_1, 
                style: style_COM_NANDO_1,
                popuplayertitle: 'COM_NANDO',
                interactive: true,
    title: 'COM_NANDO<br />\
    <img src="styles/legend/COM_NANDO_1_0.png" /> 24 - 93<br />\
    <img src="styles/legend/COM_NANDO_1_1.png" /> 93 - 163<br />\
    <img src="styles/legend/COM_NANDO_1_2.png" /> 163 - 232<br />\
    <img src="styles/legend/COM_NANDO_1_3.png" /> 232 - 302<br />\
    <img src="styles/legend/COM_NANDO_1_4.png" /> 302 - 371<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_COM_NANDO_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_COM_NANDO_1];
lyr_COM_NANDO_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_3': 'NAME_3', 'COMMUNE_NA': 'COMMUNE_NA', 'COMMUNE__1': 'COMMUNE__1', 'COMMUNE__2': 'COMMUNE__2', 'Sup km²': 'Sup km²', 'DENSITE': 'DENSITE', });
lyr_COM_NANDO_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_3': 'TextEdit', 'COMMUNE_NA': 'TextEdit', 'COMMUNE__1': 'TextEdit', 'COMMUNE__2': 'TextEdit', 'Sup km²': 'TextEdit', 'DENSITE': 'TextEdit', });
lyr_COM_NANDO_1.set('fieldLabels', {'COUNTRY': 'no label', 'NAME_3': 'no label', 'COMMUNE_NA': 'no label', 'COMMUNE__1': 'no label', 'COMMUNE__2': 'no label', 'Sup km²': 'inline label - visible with data', 'DENSITE': 'hidden field', });
lyr_COM_NANDO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});