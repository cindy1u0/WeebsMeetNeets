from django.db import models

# Create your models here.

class Weeb(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)
    about = models.CharField(max_length=500)
    avatar = models.CharField(max_length=100)
    stats = models.CharField(max_length=255)

    # def __str__(self):
    #     return '%d %s %s %s %s' % (self.id, self.name, self.about, self.avatar, self.stats)

    def getId(self):
        return '%d' % (self.id)

    def getName(self):
        return '%s' % (self.name)

    def getAbout(self):
        return '%s' % (self.about)

    def getAvatar(self):
        return '%s' % (self.avatar)

    def getStats(self):
        return '%s' % (self.stats)







#     u = Users(id=415168, name="karpik", about="Oh.", avatar="https://media.kitsu.io/users/avatars/415168/large.png?1543619222", stats="{ "Vampire": 19,
#                         "Zombie": 0,
#                         "Ghost": 8,
#                         "Super Power": 27,
#                         "Virtual Reality": 3,
#                         "Action": 105,
#                         "Incest": 0,
#                         "Sexual Abuse": 8,
#                         "Angst": 19,
#                         "Blackmail": 0,
#                         "Science Fiction": 26,
#                         "Fantasy": 95,
#                         "Adventure": 38,
#                         "Horror": 17,
#                         "Thriller": 6,
#                         "Comedy": 117,
#                         "Ecchi": 8,
#                         "Anthropomorphism": 0,
#                         "Romance": 84,
#                         "Harem": 1,
#                         "Drama": 25,
#                         "Detective": 9,
#                         "Psychological": 13,
#                         "Supernatural": 7,
#                         "Mystery": 31
# }")
