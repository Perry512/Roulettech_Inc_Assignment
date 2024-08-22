from django.urls import path
from .views import get_games, create_game, delete_all_games, delete_last_game, update_game

urlpatterns = [
    
    path('games/', get_games, name='get_games'),
    path('games/create/', create_game, name='create_game'),
    path('games/delete-last-game/', delete_last_game, name='delete_last_game'),
    path('games/delete-all/', delete_all_games, name='delete_all_games'),
    path('games/<int:pk>/update/', update_game, name='update_game'),

]