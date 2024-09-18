# Huddle

> [!IMPORTANT]
> Huddle is incomplete (started on 18/09/2024) and not on NPM yet, nor will it be until v1 is done and basic tasks have been completed. Thanks for checking us out; You're awesome. 😎

Huddle is an in-house sharding manager created by us. It is designed to be lightweight solution in order to provide the ability for simple bidirectional communication between shards, provide an implementation of reflection to shards, and provide a centeralised command handler in the manager to reduce load on the disk.

We hope to provide a secure and efficient sharding manager for the IPC layer to ensure that each bot remains relatively secure when communicating with other shards.

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
      - [ ] Public Key Exchange From Shard to Server
      - [ ] Establish Symmetric Key From Server.
      - [ ] Shard Deallocates Keys + Manager requests new key.
