import requests
import time
from datetime import datetime

token = '9019581486.885c270.edb66e9040884dd99f4477c49361f8ec'
url = 'https://api.instagram.com/v1/tags/hello/media/recent'
count = 1000                                                #Объем отдаваемой выборки фотографий

def get_photos(tag):
    offset = 0                                              #Смещение от первой отдаваемой фотографии в выборке
    coordinates = []

    result = requests.get(url, params={'access_token': token})
    result_json = result.json()
    print (result_json)





    # if result.status_code == 200:
    #     tag_count = int(result_json['response'][0])         #Количество постов с упоминаниями тега

    #     if tag_count == 0:                                  #Если нет постов с упоминанием тега
    #         print ("Нет публикаций с таким упоминанием")


    #     else:
    #         print('Количество публикаций: %s' % (tag_count)) #Если число постов больше объема выборки,
    #                                                          #проходим по выборке количество раз =
    #                                                          #количество постов / объем выборки

    #         iter_count = 0

    #         while iter_count <= round(tag_count / count):    #определяем количество необходимых итераций, в зависимости
    #                                                          #от количества записей с упоминанием тега

    #             result = requests.get(url, params={'access_token': token})
    #             progress = iter_count / (tag_count / count) * 100  #Прогресс выполнения

    #             result_json = result.json()
    #             for post in range (1, len(result_json['response'])):
    #                 if 'lat' and 'long' in result_json['response'][post]:
    #                     created = result_json['response'][post]['created']
    #                     lat = result_json['response'][post]['lat']
    #                     long = result_json['response'][post]['long']
    #                     coordinates += [[time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(created)),lat,long]]

    #                     print (time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(created)), lat, long)
    #             offset += count                                    #меняем смещение выборки при каждой итерации
    #            # time.sleep(5)
    #             iter_count += 1
    #             print('Выполнено {0:.2f}%'.format(progress))
    #         return coordinates
    # else:
    #     print ("Что-то пошло не так!!!")