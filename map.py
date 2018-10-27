import folium.plugins
from folium import IFrame
import pandas as pd


def generate_map(map_data):
    main_map = folium.Map(location=[55.7522200, 37.6155600],
                          tiles='Stamen Toner',
                          zoom_start=12,
                          zoom_control=False)

    if not map_data:
      return main_map.get_root()

    marker_cluster = folium.plugins.MarkerCluster(overlay=False).add_to(main_map)

    for row in map_data:
        html = '<div><center><img src={}></center></div>'.format(row[3])
        iframe = folium.IFrame(html=html, width=150, height=150)
        popup = folium.Popup(iframe, max_width=150)

        folium.Marker([row[1], row[2]],
                      popup=popup,
                      tooltip=row[0],
                      icon=folium.Icon(color='red', icon='ok')).add_to(marker_cluster)

    return main_map.get_root()