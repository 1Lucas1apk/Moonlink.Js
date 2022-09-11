# ⚜ nodes
> information about nodes
### 📦 Get
This function will get information about name, ws, status among others
```javascript
client.moon.nodes.get(client.moon.nodesinfos[0])
```
An example is getting node status
```javascript
client.moon.nodes.get(client.moon.nodesinfos[0]).stats
```
Will return
```javascript
{
  playingPlayers: 0,
  op: 'stats',
  memory: [Object],
  players: 2,
  cpu: [Object],
  uptime: 3091990198
}
```
### 🎈 ALL
This will return all node information

a return example
```javascript
[ 'localhost:443': [Object] ]
```
Inside the object has information about ws, status and others
