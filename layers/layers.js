var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AREADESA_1 = new ol.format.GeoJSON();
var features_AREADESA_1 = format_AREADESA_1.readFeatures(json_AREADESA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREADESA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREADESA_1.addFeatures(features_AREADESA_1);
var lyr_AREADESA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREADESA_1, 
                style: style_AREADESA_1,
                popuplayertitle: "AREA DESA",
                interactive: true,
                title: '<img src="styles/legend/AREADESA_1.png" /> AREA DESA'
            });
var format_KEBUN_2 = new ol.format.GeoJSON();
var features_KEBUN_2 = format_KEBUN_2.readFeatures(json_KEBUN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEBUN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEBUN_2.addFeatures(features_KEBUN_2);
var lyr_KEBUN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KEBUN_2, 
                style: style_KEBUN_2,
                popuplayertitle: "KEBUN",
                interactive: true,
                title: '<img src="styles/legend/KEBUN_2.png" /> KEBUN'
            });
var format_SAWAH_3 = new ol.format.GeoJSON();
var features_SAWAH_3 = format_SAWAH_3.readFeatures(json_SAWAH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_3.addFeatures(features_SAWAH_3);
var lyr_SAWAH_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAWAH_3, 
                style: style_SAWAH_3,
                popuplayertitle: "SAWAH",
                interactive: true,
                title: '<img src="styles/legend/SAWAH_3.png" /> SAWAH'
            });
var format_BANGUNAN_4 = new ol.format.GeoJSON();
var features_BANGUNAN_4 = format_BANGUNAN_4.readFeatures(json_BANGUNAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_4.addFeatures(features_BANGUNAN_4);
var lyr_BANGUNAN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_4, 
                style: style_BANGUNAN_4,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_4.png" /> BANGUNAN'
            });
var format_PEMUKIMAN_5 = new ol.format.GeoJSON();
var features_PEMUKIMAN_5 = format_PEMUKIMAN_5.readFeatures(json_PEMUKIMAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_5.addFeatures(features_PEMUKIMAN_5);
var lyr_PEMUKIMAN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_5, 
                style: style_PEMUKIMAN_5,
                popuplayertitle: "PEMUKIMAN",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_5.png" /> PEMUKIMAN'
            });
var format_BATASADMINISTRASIDESA_6 = new ol.format.GeoJSON();
var features_BATASADMINISTRASIDESA_6 = format_BATASADMINISTRASIDESA_6.readFeatures(json_BATASADMINISTRASIDESA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASADMINISTRASIDESA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASIDESA_6.addFeatures(features_BATASADMINISTRASIDESA_6);
var lyr_BATASADMINISTRASIDESA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASADMINISTRASIDESA_6, 
                style: style_BATASADMINISTRASIDESA_6,
                popuplayertitle: "BATAS ADMINISTRASI DESA",
                interactive: true,
                title: '<img src="styles/legend/BATASADMINISTRASIDESA_6.png" /> BATAS ADMINISTRASI DESA'
            });
var format_JALAN_7 = new ol.format.GeoJSON();
var features_JALAN_7 = format_JALAN_7.readFeatures(json_JALAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_7.addFeatures(features_JALAN_7);
var lyr_JALAN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_7, 
                style: style_JALAN_7,
                popuplayertitle: "JALAN",
                interactive: true,
                title: '<img src="styles/legend/JALAN_7.png" /> JALAN'
            });
var format_SUNGAI_8 = new ol.format.GeoJSON();
var features_SUNGAI_8 = format_SUNGAI_8.readFeatures(json_SUNGAI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_8.addFeatures(features_SUNGAI_8);
var lyr_SUNGAI_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_8, 
                style: style_SUNGAI_8,
                popuplayertitle: "SUNGAI",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_8.png" /> SUNGAI'
            });
var format_PUSKESMAS_9 = new ol.format.GeoJSON();
var features_PUSKESMAS_9 = format_PUSKESMAS_9.readFeatures(json_PUSKESMAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_9.addFeatures(features_PUSKESMAS_9);
var lyr_PUSKESMAS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_9, 
                style: style_PUSKESMAS_9,
                popuplayertitle: "PUSKESMAS",
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_9.png" /> PUSKESMAS'
            });

lyr_OSMStandard_0.setVisible(true);lyr_AREADESA_1.setVisible(true);lyr_KEBUN_2.setVisible(true);lyr_SAWAH_3.setVisible(true);lyr_BANGUNAN_4.setVisible(true);lyr_PEMUKIMAN_5.setVisible(true);lyr_BATASADMINISTRASIDESA_6.setVisible(true);lyr_JALAN_7.setVisible(true);lyr_SUNGAI_8.setVisible(true);lyr_PUSKESMAS_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AREADESA_1,lyr_KEBUN_2,lyr_SAWAH_3,lyr_BANGUNAN_4,lyr_PEMUKIMAN_5,lyr_BATASADMINISTRASIDESA_6,lyr_JALAN_7,lyr_SUNGAI_8,lyr_PUSKESMAS_9];
lyr_AREADESA_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_KEBUN_2.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_SAWAH_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_BANGUNAN_4.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_PEMUKIMAN_5.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_BATASADMINISTRASIDESA_6.set('fieldAliases', {'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', });
lyr_JALAN_7.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_SUNGAI_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_PUSKESMAS_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Sumber': 'Sumber', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', });
lyr_AREADESA_1.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_KEBUN_2.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_SAWAH_3.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_BANGUNAN_4.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_PEMUKIMAN_5.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_BATASADMINISTRASIDESA_6.set('fieldImages', {'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', });
lyr_JALAN_7.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_SUNGAI_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PUSKESMAS_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Sumber': 'TextEdit', 'PKMKODE': 'TextEdit', 'PKMLMT': 'TextEdit', });
lyr_AREADESA_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_KEBUN_2.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_SAWAH_3.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_BANGUNAN_4.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_PEMUKIMAN_5.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_BATASADMINISTRASIDESA_6.set('fieldLabels', {'REMARK': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', });
lyr_JALAN_7.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_SUNGAI_8.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', });
lyr_PUSKESMAS_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'Sumber': 'no label', 'PKMKODE': 'no label', 'PKMLMT': 'no label', });
lyr_PUSKESMAS_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});