var bounds = null;
    

var map_c3c2aac73b044343934287628c5e53e7 = L.map(
        'map_c3c2aac73b044343934287628c5e53e7', {
        center: [55.75222, 37.61556],
        zoom: 12,
        maxBounds: bounds,
        layers: [],
        worldCopyJump: false,
        crs: L.CRS.EPSG3857,
        zoomControl: true,
        });

    
    
var tile_layer_87b9a8888e2f4515b5f7e6690e1b90a6 = L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
        {
        "attribution": null,
        "detectRetina": false,
        "maxNativeZoom": 18,
        "maxZoom": 18,
        "minZoom": 0,
        "noWrap": false,
        "subdomains": "abc"
}).addTo(map_c3c2aac73b044343934287628c5e53e7);
    
            var marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187 = L.markerClusterGroup({});
            map_c3c2aac73b044343934287628c5e53e7.addLayer(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
            
    
        var marker_d1b93666890e4338afe75f40d863966d = L.marker(
            [58.021254000000006, 56.29395699999999],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_fae6bb4951b249d3872087532dd0e3f5 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d1b93666890e4338afe75f40d863966d.setIcon(icon_fae6bb4951b249d3872087532dd0e3f5);
            
    
            var popup_b9ec2681691e416bb71138ffb1e01288 = L.popup({maxWidth: '300'
            
            });

            
                var html_93469929464f4f44a0b72aa0693dc609 = $('<div id="html_93469929464f4f44a0b72aa0693dc609" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_b9ec2681691e416bb71138ffb1e01288.setContent(html_93469929464f4f44a0b72aa0693dc609);
            

            marker_d1b93666890e4338afe75f40d863966d.bindPopup(popup_b9ec2681691e416bb71138ffb1e01288)
            ;

            
        
    
        marker_d1b93666890e4338afe75f40d863966d.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_4bd405dad71b41c39c4875c22fcd193b = L.marker(
            [58.021184, 56.29393100000001],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_d516cf9ce969497784e6d0645bdfab76 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_4bd405dad71b41c39c4875c22fcd193b.setIcon(icon_d516cf9ce969497784e6d0645bdfab76);
            
    
            var popup_faf61b823de34d0c95682ea737747ac9 = L.popup({maxWidth: '300'
            
            });

            
                var html_a8fe128d6bff4afdb0ae31c8c3d4d4bb = $('<div id="html_a8fe128d6bff4afdb0ae31c8c3d4d4bb" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_faf61b823de34d0c95682ea737747ac9.setContent(html_a8fe128d6bff4afdb0ae31c8c3d4d4bb);
            

            marker_4bd405dad71b41c39c4875c22fcd193b.bindPopup(popup_faf61b823de34d0c95682ea737747ac9)
            ;

            
        
    
        marker_4bd405dad71b41c39c4875c22fcd193b.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_397f240bcb5c4826bbfc8d8b3912f5a5 = L.marker(
            [58.021246999999995, 56.293851000000004],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_86caf5fd01474914b6ae8053b694167a = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_397f240bcb5c4826bbfc8d8b3912f5a5.setIcon(icon_86caf5fd01474914b6ae8053b694167a);
            
    
            var popup_bfa1423bdd3e4b1d9e66dd229b671250 = L.popup({maxWidth: '300'
            
            });

            
                var html_d148883e8f4b4596ba06b4029896a940 = $('<div id="html_d148883e8f4b4596ba06b4029896a940" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_bfa1423bdd3e4b1d9e66dd229b671250.setContent(html_d148883e8f4b4596ba06b4029896a940);
            

            marker_397f240bcb5c4826bbfc8d8b3912f5a5.bindPopup(popup_bfa1423bdd3e4b1d9e66dd229b671250)
            ;

            
        
    
        marker_397f240bcb5c4826bbfc8d8b3912f5a5.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_6e36089a95f4493888ace8358287ded6 = L.marker(
            [58.021198, 56.293969999999995],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_954a64536edf4a8a84ae08205cb553df = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_6e36089a95f4493888ace8358287ded6.setIcon(icon_954a64536edf4a8a84ae08205cb553df);
            
    
            var popup_cc15183bb53f4f9ab633293f821e59e7 = L.popup({maxWidth: '300'
            
            });

            
                var html_b478254729ae4739bfdaea52f0c64bec = $('<div id="html_b478254729ae4739bfdaea52f0c64bec" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_cc15183bb53f4f9ab633293f821e59e7.setContent(html_b478254729ae4739bfdaea52f0c64bec);
            

            marker_6e36089a95f4493888ace8358287ded6.bindPopup(popup_cc15183bb53f4f9ab633293f821e59e7)
            ;

            
        
    
        marker_6e36089a95f4493888ace8358287ded6.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_7e38b2ed384c4503b9892efc2ed5a8c7 = L.marker(
            [58.021246999999995, 56.294194999999995],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_5c15d468bb4442bdb2818cb13dc9ca2f = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_7e38b2ed384c4503b9892efc2ed5a8c7.setIcon(icon_5c15d468bb4442bdb2818cb13dc9ca2f);
            
    
            var popup_8498c5457d45474391aee950e0c47855 = L.popup({maxWidth: '300'
            
            });

            
                var html_9becd2f59aed47c09e7194622350bcf5 = $('<div id="html_9becd2f59aed47c09e7194622350bcf5" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_8498c5457d45474391aee950e0c47855.setContent(html_9becd2f59aed47c09e7194622350bcf5);
            

            marker_7e38b2ed384c4503b9892efc2ed5a8c7.bindPopup(popup_8498c5457d45474391aee950e0c47855)
            ;

            
        
    
        marker_7e38b2ed384c4503b9892efc2ed5a8c7.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_95400f3b71534784b5b8b29cd5f006b2 = L.marker(
            [56.104387, 47.298657],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_8f977b98104e45aa9643d6c5672d8fa4 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_95400f3b71534784b5b8b29cd5f006b2.setIcon(icon_8f977b98104e45aa9643d6c5672d8fa4);
            
    
            var popup_7dfbea894c374b2bbb77c4f9d9977f04 = L.popup({maxWidth: '300'
            
            });

            
                var html_7cbcaaba6a1045d28832d81678ca665a = $('<div id="html_7cbcaaba6a1045d28832d81678ca665a" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_7dfbea894c374b2bbb77c4f9d9977f04.setContent(html_7cbcaaba6a1045d28832d81678ca665a);
            

            marker_95400f3b71534784b5b8b29cd5f006b2.bindPopup(popup_7dfbea894c374b2bbb77c4f9d9977f04)
            ;

            
        
    
        marker_95400f3b71534784b5b8b29cd5f006b2.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_cc09bea042bb45bc9b78847b394e265c = L.marker(
            [56.104387, 47.298657],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_b3bda3f4fcba45e4a85ee3d2ca921df5 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_cc09bea042bb45bc9b78847b394e265c.setIcon(icon_b3bda3f4fcba45e4a85ee3d2ca921df5);
            
    
            var popup_4f3dd283defa4ea9ac381d1c1ee0409a = L.popup({maxWidth: '300'
            
            });

            
                var html_95cef9be19014d7eb421757229db5c6e = $('<div id="html_95cef9be19014d7eb421757229db5c6e" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_4f3dd283defa4ea9ac381d1c1ee0409a.setContent(html_95cef9be19014d7eb421757229db5c6e);
            

            marker_cc09bea042bb45bc9b78847b394e265c.bindPopup(popup_4f3dd283defa4ea9ac381d1c1ee0409a)
            ;

            
        
    
        marker_cc09bea042bb45bc9b78847b394e265c.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_55c8202ccfb8463f9b31975341ed16f2 = L.marker(
            [59.08899399999999, 37.908595],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_cd46a86815a64bac91bce53651f42448 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_55c8202ccfb8463f9b31975341ed16f2.setIcon(icon_cd46a86815a64bac91bce53651f42448);
            
    
            var popup_e66a596dc68b498dac371859ddbd0cb0 = L.popup({maxWidth: '300'
            
            });

            
                var html_1f5896e5949e4b8abb2cee0fdc08e048 = $('<div id="html_1f5896e5949e4b8abb2cee0fdc08e048" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_e66a596dc68b498dac371859ddbd0cb0.setContent(html_1f5896e5949e4b8abb2cee0fdc08e048);
            

            marker_55c8202ccfb8463f9b31975341ed16f2.bindPopup(popup_e66a596dc68b498dac371859ddbd0cb0)
            ;

            
        
    
        marker_55c8202ccfb8463f9b31975341ed16f2.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_f59ed1c1ed924bff832b684c45295511 = L.marker(
            [41.477734999999996, 2.3206290000000003],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_87700ae02cae4a03ac48a10515bfed0a = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_f59ed1c1ed924bff832b684c45295511.setIcon(icon_87700ae02cae4a03ac48a10515bfed0a);
            
    
            var popup_ffe5125cdd4f444184bf641d71e89bb9 = L.popup({maxWidth: '300'
            
            });

            
                var html_09f512ab1db74ea786607784093856bb = $('<div id="html_09f512ab1db74ea786607784093856bb" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_ffe5125cdd4f444184bf641d71e89bb9.setContent(html_09f512ab1db74ea786607784093856bb);
            

            marker_f59ed1c1ed924bff832b684c45295511.bindPopup(popup_ffe5125cdd4f444184bf641d71e89bb9)
            ;

            
        
    
        marker_f59ed1c1ed924bff832b684c45295511.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_bd2dc1f035e54ca2b6f3c9d224d0e310 = L.marker(
            [55.694124, 37.558547999999995],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_7f0b8a1407ad450b8877ca39c440a2e2 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_bd2dc1f035e54ca2b6f3c9d224d0e310.setIcon(icon_7f0b8a1407ad450b8877ca39c440a2e2);
            
    
            var popup_6981a809b97e4f38907c10b745dccbc8 = L.popup({maxWidth: '300'
            
            });

            
                var html_5bbc8fed650349238af5408367fbc408 = $('<div id="html_5bbc8fed650349238af5408367fbc408" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_6981a809b97e4f38907c10b745dccbc8.setContent(html_5bbc8fed650349238af5408367fbc408);
            

            marker_bd2dc1f035e54ca2b6f3c9d224d0e310.bindPopup(popup_6981a809b97e4f38907c10b745dccbc8)
            ;

            
        
    
        marker_bd2dc1f035e54ca2b6f3c9d224d0e310.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_bd5f349170da44dca563b248b9018ceb = L.marker(
            [51.556086, 34.703196999999996],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_64882ad355ce44149ca7e0e8052ba451 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_bd5f349170da44dca563b248b9018ceb.setIcon(icon_64882ad355ce44149ca7e0e8052ba451);
            
    
            var popup_058795f1943f466a8a1363e552d582c6 = L.popup({maxWidth: '300'
            
            });

            
                var html_9b61414d6e50417f9b4312408819d633 = $('<div id="html_9b61414d6e50417f9b4312408819d633" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_058795f1943f466a8a1363e552d582c6.setContent(html_9b61414d6e50417f9b4312408819d633);
            

            marker_bd5f349170da44dca563b248b9018ceb.bindPopup(popup_058795f1943f466a8a1363e552d582c6)
            ;

            
        
    
        marker_bd5f349170da44dca563b248b9018ceb.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_4d220730505a426391a2cb7beee50d88 = L.marker(
            [51.749990999999994, 36.245119],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_f603b0ab4d9742dfb5b7c4b899355fd7 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_4d220730505a426391a2cb7beee50d88.setIcon(icon_f603b0ab4d9742dfb5b7c4b899355fd7);
            
    
            var popup_08665881914d4e0f90c4a05bd7c63716 = L.popup({maxWidth: '300'
            
            });

            
                var html_41292ca69ff947e2b049d62cd5771108 = $('<div id="html_41292ca69ff947e2b049d62cd5771108" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_08665881914d4e0f90c4a05bd7c63716.setContent(html_41292ca69ff947e2b049d62cd5771108);
            

            marker_4d220730505a426391a2cb7beee50d88.bindPopup(popup_08665881914d4e0f90c4a05bd7c63716)
            ;

            
        
    
        marker_4d220730505a426391a2cb7beee50d88.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_94840467623b44e2bd02af8a410dff28 = L.marker(
            [51.743053, 36.138964],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_5d6326c0d2c149c685306c9d76690609 = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_94840467623b44e2bd02af8a410dff28.setIcon(icon_5d6326c0d2c149c685306c9d76690609);
            
    
            var popup_27e12fb476394471a41298a61c040a03 = L.popup({maxWidth: '300'
            
            });

            
                var html_9fc821d9a7084c34a518acaaf148860f = $('<div id="html_9fc821d9a7084c34a518acaaf148860f" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_27e12fb476394471a41298a61c040a03.setContent(html_9fc821d9a7084c34a518acaaf148860f);
            

            marker_94840467623b44e2bd02af8a410dff28.bindPopup(popup_27e12fb476394471a41298a61c040a03)
            ;

            
        
    
        marker_94840467623b44e2bd02af8a410dff28.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );
        
    
        var marker_d1b3fba91f6f47bdbe0d61d05b16d083 = L.marker(
            [52.506599, 35.150855],
            {
                icon: new L.Icon.Default()
                }
            ).addTo(marker_cluster_e2b0ea96f1f742da9f3e06b7cbb71187);
        
    

                var icon_7318eaa2231341e2a572315fba4a230d = L.AwesomeMarkers.icon({
                    icon: 'info-sign',
                    iconColor: 'white',
                    markerColor: 'red',
                    prefix: 'glyphicon',
                    extraClasses: 'fa-rotate-0'
                    });
                marker_d1b3fba91f6f47bdbe0d61d05b16d083.setIcon(icon_7318eaa2231341e2a572315fba4a230d);
            
    
            var popup_0cfbb92bbe0c4040a7ee7cbecdaf3aeb = L.popup({maxWidth: '300'
            
            });

            
                var html_4204f9ecb3704a6eaa3b1e90631eac02 = $('<div id="html_4204f9ecb3704a6eaa3b1e90631eac02" style="width: 100.0%; height: 100.0%;">Объект</div>')[0];
                popup_0cfbb92bbe0c4040a7ee7cbecdaf3aeb.setContent(html_4204f9ecb3704a6eaa3b1e90631eac02);
            

            marker_d1b3fba91f6f47bdbe0d61d05b16d083.bindPopup(popup_0cfbb92bbe0c4040a7ee7cbecdaf3aeb)
            ;

            
        
    
        marker_d1b3fba91f6f47bdbe0d61d05b16d083.bindTooltip(
            '<div>'
            + 'Нажми на меня' + '</div>',
            {"sticky": true}
        );