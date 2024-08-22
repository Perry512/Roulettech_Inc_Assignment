from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
from .models import Game
from .serializers import GameSerializer

@api_view(['GET'])
def get_games(request):
    games = Game.objects.all()
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_game(request):
    serializer = GameSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_last_game(request):
    try:
        last_game = Game.objects.order_by('-id').first()
        last_game.delete()
        return Response({'message': 'Last game deleted'}, status=status.HTTP_204_NO_CONTENT)
    except Game.DoesNotExist:
        return Response({'error': 'No games to delete'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete_all_games(request):
    Game.objects.all().delete()
    return Response({'message': 'All games deleted'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def get_games(request):
    title = request.GET.get('title', None)
    if title:
        games = Game.objects.filter(title__iexact=title)
    else:
        games = Game.objects.all()
    
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def update_game(request, pk):
    try:
        game = Game.objects.get(pk=pk)
    except Game.DoesNotExist:
        return Response({'error': 'Game not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = GameSerializer(game, data=request.data, partial=True)  # Allow partial updates
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)