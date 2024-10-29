ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32755").setExtent([484142.082863, 9008556.129474, 501879.972566, 9020147.933301]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Coupe5_1 = new ol.format.GeoJSON();
var features_Coupe5_1 = format_Coupe5_1.readFeatures(json_Coupe5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Coupe5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coupe5_1.addFeatures(features_Coupe5_1);
var lyr_Coupe5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coupe5_1, 
                style: style_Coupe5_1,
                popuplayertitle: "Coupe 5",
                interactive: true,
                title: '<img src="styles/legend/Coupe5_1.png" /> Coupe 5'
            });
var format_Coupe4_2 = new ol.format.GeoJSON();
var features_Coupe4_2 = format_Coupe4_2.readFeatures(json_Coupe4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Coupe4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coupe4_2.addFeatures(features_Coupe4_2);
var lyr_Coupe4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coupe4_2, 
                style: style_Coupe4_2,
                popuplayertitle: "Coupe 4",
                interactive: true,
                title: '<img src="styles/legend/Coupe4_2.png" /> Coupe 4'
            });
var format_Coupe3_3 = new ol.format.GeoJSON();
var features_Coupe3_3 = format_Coupe3_3.readFeatures(json_Coupe3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Coupe3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coupe3_3.addFeatures(features_Coupe3_3);
var lyr_Coupe3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coupe3_3, 
                style: style_Coupe3_3,
                popuplayertitle: "Coupe 3",
                interactive: true,
                title: '<img src="styles/legend/Coupe3_3.png" /> Coupe 3'
            });
var format_Coupe2_4 = new ol.format.GeoJSON();
var features_Coupe2_4 = format_Coupe2_4.readFeatures(json_Coupe2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Coupe2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coupe2_4.addFeatures(features_Coupe2_4);
var lyr_Coupe2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coupe2_4, 
                style: style_Coupe2_4,
                popuplayertitle: "Coupe 2",
                interactive: true,
                title: '<img src="styles/legend/Coupe2_4.png" /> Coupe 2'
            });
var format_Coupe1_5 = new ol.format.GeoJSON();
var features_Coupe1_5 = format_Coupe1_5.readFeatures(json_Coupe1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Coupe1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coupe1_5.addFeatures(features_Coupe1_5);
var lyr_Coupe1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coupe1_5, 
                style: style_Coupe1_5,
                popuplayertitle: "Coupe 1",
                interactive: true,
                title: '<img src="styles/legend/Coupe1_5.png" /> Coupe 1'
            });
var format_InikaBoibuinnaBasecamp_6 = new ol.format.GeoJSON();
var features_InikaBoibuinnaBasecamp_6 = format_InikaBoibuinnaBasecamp_6.readFeatures(json_InikaBoibuinnaBasecamp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_InikaBoibuinnaBasecamp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InikaBoibuinnaBasecamp_6.addFeatures(features_InikaBoibuinnaBasecamp_6);
var lyr_InikaBoibuinnaBasecamp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InikaBoibuinnaBasecamp_6, 
                style: style_InikaBoibuinnaBasecamp_6,
                popuplayertitle: "Inika Boibuinna Basecamp",
                interactive: true,
                title: '<img src="styles/legend/InikaBoibuinnaBasecamp_6.png" /> Inika Boibuinna Basecamp'
            });
var format_HeonoTa_7 = new ol.format.GeoJSON();
var features_HeonoTa_7 = format_HeonoTa_7.readFeatures(json_HeonoTa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_HeonoTa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeonoTa_7.addFeatures(features_HeonoTa_7);
var lyr_HeonoTa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeonoTa_7, 
                style: style_HeonoTa_7,
                popuplayertitle: "Heono Ta",
                interactive: true,
                title: '<img src="styles/legend/HeonoTa_7.png" /> Heono Ta'
            });
var format_AvaAvaTA_8 = new ol.format.GeoJSON();
var features_AvaAvaTA_8 = format_AvaAvaTA_8.readFeatures(json_AvaAvaTA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_AvaAvaTA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AvaAvaTA_8.addFeatures(features_AvaAvaTA_8);
var lyr_AvaAvaTA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AvaAvaTA_8, 
                style: style_AvaAvaTA_8,
                popuplayertitle: "Ava Ava TA",
                interactive: true,
                title: '<img src="styles/legend/AvaAvaTA_8.png" /> Ava Ava TA'
            });
var format_Existing_Road_9 = new ol.format.GeoJSON();
var features_Existing_Road_9 = format_Existing_Road_9.readFeatures(json_Existing_Road_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Existing_Road_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existing_Road_9.addFeatures(features_Existing_Road_9);
var lyr_Existing_Road_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Existing_Road_9, 
                style: style_Existing_Road_9,
                popuplayertitle: "Existing_Road",
                interactive: true,
                title: '<img src="styles/legend/Existing_Road_9.png" /> Existing_Road'
            });
var format_Proposed_LoggingRoad_10 = new ol.format.GeoJSON();
var features_Proposed_LoggingRoad_10 = format_Proposed_LoggingRoad_10.readFeatures(json_Proposed_LoggingRoad_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Proposed_LoggingRoad_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_LoggingRoad_10.addFeatures(features_Proposed_LoggingRoad_10);
var lyr_Proposed_LoggingRoad_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposed_LoggingRoad_10, 
                style: style_Proposed_LoggingRoad_10,
                popuplayertitle: "Proposed_Logging Road",
                interactive: true,
                title: '<img src="styles/legend/Proposed_LoggingRoad_10.png" /> Proposed_Logging Road'
            });
var format_Proposed_Road_11 = new ol.format.GeoJSON();
var features_Proposed_Road_11 = format_Proposed_Road_11.readFeatures(json_Proposed_Road_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Proposed_Road_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proposed_Road_11.addFeatures(features_Proposed_Road_11);
var lyr_Proposed_Road_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proposed_Road_11, 
                style: style_Proposed_Road_11,
                popuplayertitle: "Proposed_Road",
                interactive: true,
                title: '<img src="styles/legend/Proposed_Road_11.png" /> Proposed_Road'
            });
var format_Hiritanohighway_12 = new ol.format.GeoJSON();
var features_Hiritanohighway_12 = format_Hiritanohighway_12.readFeatures(json_Hiritanohighway_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Hiritanohighway_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hiritanohighway_12.addFeatures(features_Hiritanohighway_12);
var lyr_Hiritanohighway_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hiritanohighway_12, 
                style: style_Hiritanohighway_12,
                popuplayertitle: "Hiritano highway",
                interactive: true,
                title: '<img src="styles/legend/Hiritanohighway_12.png" /> Hiritano highway'
            });
var format_RoadtoVeneerMill_13 = new ol.format.GeoJSON();
var features_RoadtoVeneerMill_13 = format_RoadtoVeneerMill_13.readFeatures(json_RoadtoVeneerMill_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_RoadtoVeneerMill_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadtoVeneerMill_13.addFeatures(features_RoadtoVeneerMill_13);
var lyr_RoadtoVeneerMill_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadtoVeneerMill_13, 
                style: style_RoadtoVeneerMill_13,
                popuplayertitle: "Road to Veneer Mill",
                interactive: true,
                title: '<img src="styles/legend/RoadtoVeneerMill_13.png" /> Road to Veneer Mill'
            });
var format_Wama_Road_14 = new ol.format.GeoJSON();
var features_Wama_Road_14 = format_Wama_Road_14.readFeatures(json_Wama_Road_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Wama_Road_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wama_Road_14.addFeatures(features_Wama_Road_14);
var lyr_Wama_Road_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wama_Road_14, 
                style: style_Wama_Road_14,
                popuplayertitle: "Wama_Road",
                interactive: true,
                title: '<img src="styles/legend/Wama_Road_14.png" /> Wama_Road'
            });
var format_WAMA_TEMPORARY_BASECAMP_15 = new ol.format.GeoJSON();
var features_WAMA_TEMPORARY_BASECAMP_15 = format_WAMA_TEMPORARY_BASECAMP_15.readFeatures(json_WAMA_TEMPORARY_BASECAMP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_WAMA_TEMPORARY_BASECAMP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAMA_TEMPORARY_BASECAMP_15.addFeatures(features_WAMA_TEMPORARY_BASECAMP_15);
var lyr_WAMA_TEMPORARY_BASECAMP_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAMA_TEMPORARY_BASECAMP_15, 
                style: style_WAMA_TEMPORARY_BASECAMP_15,
                popuplayertitle: "WAMA_TEMPORARY_BASE CAMP",
                interactive: true,
                title: '<img src="styles/legend/WAMA_TEMPORARY_BASECAMP_15.png" /> WAMA_TEMPORARY_BASE CAMP'
            });
var format_LogPond_16 = new ol.format.GeoJSON();
var features_LogPond_16 = format_LogPond_16.readFeatures(json_LogPond_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_LogPond_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogPond_16.addFeatures(features_LogPond_16);
var lyr_LogPond_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogPond_16, 
                style: style_LogPond_16,
                popuplayertitle: "Log Pond",
                interactive: true,
                title: '<img src="styles/legend/LogPond_16.png" /> Log Pond'
            });
var format_Bridges_17 = new ol.format.GeoJSON();
var features_Bridges_17 = format_Bridges_17.readFeatures(json_Bridges_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Bridges_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridges_17.addFeatures(features_Bridges_17);
var lyr_Bridges_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridges_17, 
                style: style_Bridges_17,
                popuplayertitle: "Bridges",
                interactive: true,
                title: '<img src="styles/legend/Bridges_17.png" /> Bridges'
            });
var format_Propose_Bridge_18 = new ol.format.GeoJSON();
var features_Propose_Bridge_18 = format_Propose_Bridge_18.readFeatures(json_Propose_Bridge_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_Propose_Bridge_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propose_Bridge_18.addFeatures(features_Propose_Bridge_18);
var lyr_Propose_Bridge_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Propose_Bridge_18, 
                style: style_Propose_Bridge_18,
                popuplayertitle: "Propose_Bridge",
                interactive: true,
                title: '<img src="styles/legend/Propose_Bridge_18.png" /> Propose_Bridge'
            });
var format_DoaVennerMill_19 = new ol.format.GeoJSON();
var features_DoaVennerMill_19 = format_DoaVennerMill_19.readFeatures(json_DoaVennerMill_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_DoaVennerMill_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DoaVennerMill_19.addFeatures(features_DoaVennerMill_19);
var lyr_DoaVennerMill_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DoaVennerMill_19, 
                style: style_DoaVennerMill_19,
                popuplayertitle: "Doa Venner Mill",
                interactive: true,
                title: '<img src="styles/legend/DoaVennerMill_19.png" /> Doa Venner Mill'
            });
var format_SabusaSawMill_20 = new ol.format.GeoJSON();
var features_SabusaSawMill_20 = format_SabusaSawMill_20.readFeatures(json_SabusaSawMill_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32755'});
var jsonSource_SabusaSawMill_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SabusaSawMill_20.addFeatures(features_SabusaSawMill_20);
var lyr_SabusaSawMill_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SabusaSawMill_20, 
                style: style_SabusaSawMill_20,
                popuplayertitle: "Sabusa Saw Mill",
                interactive: true,
                title: '<img src="styles/legend/SabusaSawMill_20.png" /> Sabusa Saw Mill'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Coupe5_1.setVisible(true);lyr_Coupe4_2.setVisible(true);lyr_Coupe3_3.setVisible(true);lyr_Coupe2_4.setVisible(true);lyr_Coupe1_5.setVisible(true);lyr_InikaBoibuinnaBasecamp_6.setVisible(true);lyr_HeonoTa_7.setVisible(true);lyr_AvaAvaTA_8.setVisible(true);lyr_Existing_Road_9.setVisible(true);lyr_Proposed_LoggingRoad_10.setVisible(true);lyr_Proposed_Road_11.setVisible(true);lyr_Hiritanohighway_12.setVisible(true);lyr_RoadtoVeneerMill_13.setVisible(true);lyr_Wama_Road_14.setVisible(true);lyr_WAMA_TEMPORARY_BASECAMP_15.setVisible(true);lyr_LogPond_16.setVisible(true);lyr_Bridges_17.setVisible(true);lyr_Propose_Bridge_18.setVisible(true);lyr_DoaVennerMill_19.setVisible(true);lyr_SabusaSawMill_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Coupe5_1,lyr_Coupe4_2,lyr_Coupe3_3,lyr_Coupe2_4,lyr_Coupe1_5,lyr_InikaBoibuinnaBasecamp_6,lyr_HeonoTa_7,lyr_AvaAvaTA_8,lyr_Existing_Road_9,lyr_Proposed_LoggingRoad_10,lyr_Proposed_Road_11,lyr_Hiritanohighway_12,lyr_RoadtoVeneerMill_13,lyr_Wama_Road_14,lyr_WAMA_TEMPORARY_BASECAMP_15,lyr_LogPond_16,lyr_Bridges_17,lyr_Propose_Bridge_18,lyr_DoaVennerMill_19,lyr_SabusaSawMill_20];
lyr_Coupe5_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Area': 'Area', });
lyr_Coupe4_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Area': 'Area', });
lyr_Coupe3_3.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Area': 'Area', });
lyr_Coupe2_4.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Area': 'Area', });
lyr_Coupe1_5.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Area': 'Area', });
lyr_InikaBoibuinnaBasecamp_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Area': 'Area', });
lyr_HeonoTa_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Area_Ha': 'Area_Ha', });
lyr_AvaAvaTA_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Area': 'Area', });
lyr_Existing_Road_9.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Distance': 'Distance', });
lyr_Proposed_LoggingRoad_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Distancekm': 'Distancekm', });
lyr_Proposed_Road_11.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Distance': 'Distance', });
lyr_Hiritanohighway_12.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Distance': 'Distance', });
lyr_RoadtoVeneerMill_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Distancekm': 'Distancekm', });
lyr_Wama_Road_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Distancekm': 'Distancekm', });
lyr_WAMA_TEMPORARY_BASECAMP_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_LogPond_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Bridges_17.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Propose_Bridge_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_DoaVennerMill_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SabusaSawMill_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Coupe5_1.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_Coupe4_2.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_Coupe3_3.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_Coupe2_4.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_Coupe1_5.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_InikaBoibuinnaBasecamp_6.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_HeonoTa_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_AvaAvaTA_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_Existing_Road_9.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Proposed_LoggingRoad_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Distancekm': 'TextEdit', });
lyr_Proposed_Road_11.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Hiritanohighway_12.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_RoadtoVeneerMill_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Distancekm': 'TextEdit', });
lyr_Wama_Road_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Distancekm': 'TextEdit', });
lyr_WAMA_TEMPORARY_BASECAMP_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_LogPond_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Bridges_17.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Propose_Bridge_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_DoaVennerMill_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SabusaSawMill_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Coupe5_1.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Coupe4_2.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Coupe3_3.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area': 'no label', });
lyr_Coupe2_4.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'no label', 'Area': 'inline label - always visible', });
lyr_Coupe1_5.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_InikaBoibuinnaBasecamp_6.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_HeonoTa_7.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area_Ha': 'inline label - always visible', });
lyr_AvaAvaTA_8.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Existing_Road_9.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distance': 'inline label - always visible', });
lyr_Proposed_LoggingRoad_10.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distancekm': 'inline label - always visible', });
lyr_Proposed_Road_11.set('fieldLabels', {'ID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distance': 'inline label - always visible', });
lyr_Hiritanohighway_12.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distance': 'inline label - always visible', });
lyr_RoadtoVeneerMill_13.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distancekm': 'inline label - always visible', });
lyr_Wama_Road_14.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'Distancekm': 'inline label - always visible', });
lyr_WAMA_TEMPORARY_BASECAMP_15.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_LogPond_16.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Bridges_17.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Propose_Bridge_18.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_DoaVennerMill_19.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_SabusaSawMill_20.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_SabusaSawMill_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});