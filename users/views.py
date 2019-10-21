from django.template import loader
from django.http import HttpResponse
from .models import Weeb
from django.core import serializers
import random

def index(request):
    users = sorted(Weeb.objects.all().order_by('id')[:10], key=lambda x: random.random())

    users_list = serializers.serialize('json', users)
    
    return HttpResponse(users_list, content_type="application/json")

# TO DO:
    # my_stats = { "Vampire": 0,
    #             "Super Power": 5,
    #             "Virtual Reality": 1,
    #             "Action": 62,
    #             "Science Fiction": 32,
    #             "Fantasy": 62,
    #             "Adventure": 45,
    #             "Horror": 25,
    #             "Thriller": 23,
    #             "Comedy": 33,
    #             "Henshin": 1,
    #             "Ecchi": 1,
    #             "Anthropomorphism": 1,
    #             "Romance": 32,
    #             "Harem": 0,
    #             "Drama": 80,
    #             "Detective": 1,
    #             "Psychological": 44,
    #             "Supernatural": 1,
    #             "Mystery": 36
    #         }
    # weeb_to_diff = []
    # for (int i = 0; i < len(weebs); i++):
    #     weeb_stat = ast.literal_eval(weebs[i].stats)
    #     weeb_to_diff[i] = the sum of all diff of the 2 maps