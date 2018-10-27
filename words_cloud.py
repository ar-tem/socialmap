from os import path
from scipy.misc import imread
import matplotlib.pyplot as plt
import random
from wordcloud import WordCloud, STOPWORDS

def render_cloud():
    with open('text.txt', 'r') as text:
        data=text.readlines()

    text_for_cloud = ''.join(data)
    img = BytesIO()
    
    wordcloud = WordCloud(relative_scaling=1.0,
                        stopwords={'а', 'и'},
                        background_color='white' ).generate(text_for_cloud).to_image().save(img, 'PNG')
    
    return img.seek(0)