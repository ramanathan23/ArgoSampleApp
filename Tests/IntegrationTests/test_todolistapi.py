import json
import requests


baseUrl = "http://todolistapi.apps:8000"

def test_post_todo():
    path = "/todo"
    response = requests.post(url=baseUrl+path)
    assert response.status_code == 200

def test_get_todo():
    path = "/todo"
    response = requests.get(url=baseUrl+path)
    responseJson = json.loads(response.text)
    assert response.status_code == 200
    
def test_patch_todo():
    path = "/todo"
    response = requests.patch(url=baseUrl+path, json={"id": 0})
    assert response.status_code == 200