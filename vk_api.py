import requests
import time
import csv
from datetime import datetime
from constants import token

url = 'https://api.vk.com/method/photos.search'
count = 1000                                                #Объем отдаваемой выборки фотографий

def get_photos(tag):
    offset = 0                                              #Смещение от первой отдаваемой фотографии в выборке
    coordinates = []

    result = requests.get(url, params={'count': count,
                                       'access_token': token,
                                       'q': tag,
                                       'v': 3.00})
    result_json = result.json()

    if result.status_code == 200:
        tag_count = int(result_json['response'][0])         #Количество постов с упоминаниями тега

        if tag_count == 0:                                  #Если нет постов с упоминанием тега
            print ("Нет публикаций с таким упоминанием")


        else:
            print('Количество публикаций: %s' % (tag_count)) #Если число постов больше объема выборки,
                                                             #проходим по выборке количество раз =
                                                             #количество постов / объем выборки

            iter_count = 0

            while iter_count <= round(tag_count / count):    #определяем количество необходимых итераций, в зависимости
                                                             #от количества записей с упоминанием тега

                result = requests.get(url, params={'count': count,
                                                   'offset': offset,
                                                   'access_token': token,
                                                   'q': tag,
                                                   'v': 3.00})
                progress = iter_count / (tag_count / count) * 100  #Прогресс выполнения

                result_json = result.json()
                for post in range (1, len(result_json['response'])):
                    if 'lat' and 'long' in result_json['response'][post]:
                        created = result_json['response'][post]['created']
                        lat = result_json['response'][post]['lat']
                        long = result_json['response'][post]['long']
                        user_img = result_json['response'][post]['src']
                        user_text = result_json['response'][post]['text']
                        coordinates += [[time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(created)),lat,long, user_img, user_text]]
                        print (time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(created)), lat, long, user_img, user_text)
                offset += count                                    #меняем смещение выборки при каждой итерации
                iter_count += 1
                print('Выполнено {0:.2f}%'.format(progress))
            return coordinates
    else:
        print ("Что-то пошло не так!!!")