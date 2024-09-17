# Huddle

Huddle is an in-house sharding manager created by us. It is designed to be lightweight solution in order to provide the ability for simple bidirectional communication between shards, provide an implementation of reflection to shards, and provide a centeralised command handler in the manager to reduce load on the disk.

## To Do

- [ ] Add manager
  - [ ] Implement Events
    - [ ] Client
      - [ ] send `ShardReflection`
        - [ ] Commands (Things like requesting refresh)
        - [ ] Data
        - [ ] Execution Handover
    - [ ] Server
      - [ ] send `ManagerReflection`
        - [ ] Commands
        - [ ] Data
        - [ ] Execution Handover
  - [ ] Implement Process Communication
    - [ ] Abstraction
      - [ ] `child.send()`
      - [ ] `process.on("message")`
      - [ ] `process.send()`
    - [ ] Secure Communication **(In Memory + Order)**
      - [ ] Private Key Generation
      - [ ] Public Key Exchange
      - [ ] Establish Symmetric Key
      - [ ] Shard Deallocates Keys + Manager rotates keys once per week
