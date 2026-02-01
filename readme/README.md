# FOP_AAA_Project_Wholesale

Our assets are in the link: 
https://github.com/yys233-pudding/assets.git
Due to the limited file size to upload to the Artemis, 
the assets file cannot be uploaded.
Also the UML and ER Diagram for the database is in the link.

## Project Structure

This is a single-player game developed based on the LibGDX framework, adopting a modular design with clear code structure. The core code is located in the `core` directory, which contains the main game logic and functionality implementation.

### Directory Structure

```
├── core/             # Core code directory
│   └── src/main/java/io/github/maze/  # Main code package
│       ├── Main.java                  # Game main entry
│       ├── achievement/               # Achievement system
│       ├── console/                   # Console functionality
│       ├── db/                        # Database management
│       ├── entities/                  # Game entities
│       ├── game/                      # Game core logic
│       ├── items/                     # Item system
│       ├── leaderboard/               # Game records ranking
│       ├── manager/                   # Various managers
│       ├── map/                       # Map system
│       ├── platform/                  # Platform-related functionality
│       ├── render/                    # Rendering related
│       ├── save/                      # Save system
│       ├── screens/                   # Game screens
│       ├── ui/                        # User interface
│       └── user/                      # User related
├── lwjgl3/           # LWJGL3 backend implementation
├── assets/           # Resource files directory
│   ├── achievements/ # Achievement related resources
│   ├── audio/        # Audio files (background music, sound effects)
│   ├── cg/           # CG images (transition animations)
│   ├── characters/   # Character resources
│   ├── collectables/ # Collectible items
│   ├── decorations/  # Decoration elements
│   ├── maps/         # Map files
│   ├── player/       # Player resources
│   ├── screens/      # Screen related resources
│   ├── shaders/      # Shaders
│   ├── tiles/        # Map tiles
│   ├── ui/           # UI elements
│   ├── video/        # Video files
│   └── walls/        # Wall resources
└── saves/            # Game saves
```

### UML Class Diagram

![UML Class Diagram](UML.png)

## Class Hierarchy

The game adopts an object-oriented design approach, with the following main class hierarchy:

### Core Classes
- **Main**：Game main class, inherits from LibGDX's Game class, responsible for initializing game resources and managing game lifecycle
- **ScreenManager**：Screen manager, responsible for managing the switching between different game screens
- **GameWorld**：Game world, manages all entities and logic in the game

### Screen Classes
- **ScreenAdapter**：Base class for all screens, inherits from LibGDX's ScreenAdapter
  - **MenuScreen**：Main menu screen
  - **GameScreen**：，Game main screen
  - **PauseScreen**：Pause screen
  - **AbstractResultScreen**: Result screen
    - **GameOverScreen**：Game over screen
    - **VictoryScreen**：Victory screen
  - **MapSelectScreen**：Map selection screen
  - **SettingsScreen**：Settings screen
  - **LoginScreen**：Login screen
  - **SkillTreeScreen**: Skill Tree Screen
  - **AchievementScreen**: Achievement screen
  - **CutsceneScreen**: CG screen
  - **ItemScreen**: Item screen
  - **RPGScreen**: RPG screen
  - **LeaderboardScreen**: Leaderboard screen

### Entity Classes
- **Entity**：Base class for all entities
  - **Player**：Player entity
  - **Enemy**：Enemy entity
    - **BossEnemy**：Boss enemy
    - **MushroomEnemy**：Mushroom enemy
    - **ChairEnemy**：Chair enemy
  - **TreasureChest**：Treasure chest
  - **MimicChest**：Mimic chest (enemy disguised as a chest)

### Item Classes
- **Item**：Base class for all items
  - **Key**：Key
  - **Lives**：Life item
  - **MagicPotion**：Magic potion
  - **Fragment1-5**：Fragment items

### Manager Classes
- **AssetLoader**：Resource loader
- **AudioManager**：Audio manager
- **CollisionManager**: Check for collision
- **ConfigManager**：Configuration manager
- **CutsceneManager**：CG manager (transition animations)
- **DecorationManager**: Decoration manager
- **EnemyManager**：Enemy manager
- **FragmentManager**: Fragment manager
- **InputManager**: Input manager
- **ItemManager**: Item manager
- **ScreenManager**: Screen manager
- **LeaderboardManager**：Game records ranking manager
- **SaveManager**：Save manager

### Map Classes
- **Map**：Map class
- **MapLoader**：Load maps from properties files
- **Tile**：Map tile

## Game Mechanics

### Core Game Mechanics

1. **Character System**：
   - Protagonist: A stressed student experiencing a lucid nightmare
   - Movement: Player can only move and escape - no combat abilities, aligning with nightmare theme design
   - Health System: Flexible initial health
     * Represents Clarity/Lucidity - the ability to stay calm in the nightmare
     * Colliding with enemies or traps reduces Clarity, increasing Nightmare Stress
     * When Clarity reaches zero: Player gets scared awake → Bad Ending

2. **Item System**：
   - There are multiple types of items in the game, including keys, life items, magic potions, and fragments
   - Key / Lantern: Main objective item to leave the maze
     * Illuminates the maze (extends light radius)
     * In Endless Mode: Has limited fuel/time
   - Life items are used to increase health points
   - Magic potions are used to restore magic points
   - Fragments: Pieces of enemy identities from real-life stress sources
     * Collect to purify corresponding enemy types
     * Represent making peace with stress sources

3. **Enemy & Trap System**:
   - Enemies as Stress Projections: Each enemy represents a real-life stress source projected into the dream

4. **Map System**：
   - The game contains multiple maps, representing the dark, labyrinthine dream world
   - Limited visibility without lantern
   - Paths and walls have minimum visibility, but enemies/items can be completely invisible in darkness
   - Key / Lantern is needed to succeed the map. Lantern reveals nearby areas and makes entities visible

5. **Game Modes**:
    - Normal Mode: Find lantern → Reach exit before Clarity depletes
      * Enemies and fragments do not respawn
      * Goal: Escape the nightmare by confronting limited stress sources
   - Endless Mode:
     * Lantern has limited lighting time (countdown timer)
     * Enemies and fragments respawn after purification
     * New, stronger waves of enemies appear
     * Goal: Survive and purify as many enemies as possible before bringing the key to the exit

6. **Achievement System**：
   - There are multiple achievements in the game, which can be obtained by completing specific conditions
   - Achievements can be viewed in the achievement screen

7. **Skill Tree**
   - Player gaines exp points after completing a map
   - exp points accumulate to earn points, which can then be used for permanent upgrades
   - Upgrades enclude: extra health, speed, stamina, and sight range

8. **Game Records Ranking**：
   - Records player's game performance, such as completion time, score obtained, etc.
   - Game records ranking can be viewed after game ends

9. **RPG + CG System**：
   - The game includes interactable RPG and transition animations (CG) to enhance the game's narrative
   - CG plays at key nodes in the game

### Game Rules

1. **Victory Conditions**：
   * Find the lantern (main key to the maze)
   * Reach the exit while still having Clarity (Health)
   * Optional: Purify enemy types by collecting their fragments

2. **Failure Conditions**：
   * Clarity (Health) reaches 0 → Scared awake (Bad Ending)

3. **Scoring Rules**：
   - Survive to gain points 
   - Purify enemies to gain points
   - Collect items to gain points

## Operation Methods

### Main Menu Operations
- **Start Game**：Click the "Start Game" button to start a new game 
or choose to continue the old game before
- **Select Map**：Click the "Select Map" button to choose the map to play
- **Settings**：Click the "Settings" button to adjust game settings (sound effects, resolution, etc.)
- **Achievement**：Click the "Achievement" button to view obtained achievements
- **Leaderboard**：Click the "Leaderboard" button to view the leaderboard (both for global and local records)
- **Exit**：Click the "Exit" button to choose, exit login or exit game

### In-game Operations
- **Move**; Use WASD keys to move the player
- **Sprint**: Usr shift key to sprint the player
- **Potion**: Use F to use a potion and gain a buff
- **Open Inventory**: Press Tab key to open inventory
- **Pause Game**: Press ESC key to open pause menu
- **Scroll Up**: Press M key to scroll Up the screen
- **Scroll Down**: Press N key to scroll Down the screen

## How to Run the Game

### Environment Requirements
- JDK 8 or higher
- Gradle 7.0 or higher

### Build and Run
1. **Build the project**：
   - Windows: `gradlew.bat build`
   - Other systems: `./gradlew build`

2. **Run the game**：
   - Windows: `gradlew.bat lwjgl3:run`
   - Other systems: `./gradlew lwjgl3:run`

3. **Create executable jar package**：
   - Windows: `gradlew.bat lwjgl3:jar`
   - Other systems: `./gradlew lwjgl3:jar`
   - The generated jar package is located in the `lwjgl3/build/libs` directory

## Technical Implementation

- **Game Engine**：LibGDX
- **Language**：Java
- **Build Tool**：Gradle
- **Graphics Rendering**：OpenGL ES
- **Audio**：LibGDX Audio
- **Physics Engine**：Box2D (optional)

## Advanced Game Mechanics

### 1. Database Design

Our game features a robust database system to manage user accounts, game progress, and achievements,
providing several advantages over a purely local storage solution.
All user registration data is stored centrally in the database,
ensuring that game progress and settings are not tied to a single device or local files.
This approach guarantees consistency, security, and portability for registered users.

#### Database Schema

![ER Diagram.png](ER%20Diagram.png)
#### Table Descriptions

| Table | Purpose | Key Features |
|-------|---------|--------------|
| **`USERS`** | Stores user account information | • Unique usernames<br>• Hashed passwords<br>• Account creation tracking |
| **`LEADERBOARD`** | Records game scores and statistics | • Multi-dimensional scoring<br>• Game mode and map specific<br>• Comprehensive gameplay metrics |
| **`ACHIEVEMENT_PROGRESS`** | Tracks ongoing achievement progress | • Real-time progress tracking<br>• Normalized design<br>• Supports incremental achievements |
| **`ACHIEVEMENT_UNLOCKED`** | Stores unlocked achievement tiers | • Milestone-based unlocks<br>• 3NF compliant<br>• Efficient querying |

#### Relationships Overview
![Database Relationships.png](Database%20Relationships.png)

#### Design Highlights

- Normalized Achievement System: 
To maintain proper normalization (3NF), the achievement system was split into two tables: one for tracking progress and another for unlocked tiers. This separation ensures data integrity, eliminates redundancy, and simplifies queries for achievement completion.

- Hybrid Storage Strategy: 
Originally, our game stored achievement data in JSON files. To support iterative development and backward compatibility, we retained code for loading achievement information from JSON when database records are missing. This hybrid approach allows us to seamlessly transition legacy users while benefiting from a fully normalized relational schema.

#### **Advantages of Our Design**

| Advantage                 | Description |
|---------------------------|-------------|
| **Persistence & Consistency** | All user accounts and progress are reliably stored in a single database, independent of local files. |
| **Data Integrity**        | Normalized tables prevent redundant or inconsistent data, particularly in the achievement system. |
| **Scalability**           | Supports additional features like leaderboards and new achievements without schema redesign. |
| **Iterative Support**    | Legacy JSON-based storage is integrated, allowing smooth migration and flexible updates. |
| **Centralized Queries** | Facilitates analytics, ranking, and reporting features efficiently. |


### 2. Smart Wall Rendering with Corner Optimization

#### The Challenge

In our top-down perspective game, walls needed to appear visually thick to create depth and realism. While typical tile-based games use a 4-direction binary system (up/down/left/right) requiring only 16 texture combinations, our thick walls introduced corner complexities that would normally require 256 textures (8-direction binary system).

#### Our Innovative Solution

We developed an elegant corner coverage method:

1. Base System: Use 4-direction binary logic for wall adjacency detection
2. Corner Handling: Place blank overlay textures at corners where walls meet
3. Visual Integrity: Maintain the illusion of thickness without extra textures
#### Benefits Achieved
- Visual Depth: Walls appear solid and three-dimensional
- Performance: Reduced texture memory usage by 84% (256 → 16 textures)
- Maintainability: Easy to create and modify wall assets
- Consistent Style: All corners display seamlessly

### 3. Dynamic Y-Axis Sorting Render System
#### The Challenge

Our game features diverse object sizes and dual-layer walls:

1. Dual-layer Walls: Each wall consists of bottom and top layers for 3D effect
2. Varying Sizes: Some enemies occupy 2×2 tiles, causing rendering conflicts
3. Depth Conflicts: Simple category-based rendering created visual glitches

#### The Problem with Traditional Methods

```pseudocode
// Problematic approaches:
renderAllItems();        // Items hidden behind walls
renderBottomWalls();     
renderEnemies();         // Enemies appear on top of walls
renderTopWalls();        // But enemies are too tall and clip through top layer
```

#### Our Solution: Y-Axis Sorting
We implemented a comprehensive rendering pipeline that sorts all objects by their Y-position:

```pseudocode
// Core rendering order (simplified):
List<Renderable> all = new ArrayList<>();

// 1. Collect all renderable objects
all.add(wallBottom);     // Base wall layer
all.add(wallTop);        // Upper wall layer for 3D effect  
all.add(key);            // Collectibles
all.add(enemies);        // Various enemy types
all.add(player);         // Main character
all.add(treasures);      // Chests and fragments
all.add(decorations);    // Environmental details

// 2. Sort by Y-position (from bottom to top of screen)
all.sort((a, b) -> Float.compare(b.getBottomY(), a.getBottomY()));

// 3. Render in correct depth order
for (Renderable r : all) {
r.render(batch);
}
```
### 4. Custom Map Upload & Safety Design

Our game supports **player-created custom maps** 
while maintaining a strong focus on robustness, safety, and usability. The map upload system is designed to prevent crashes, handle malformed inputs gracefully, and ensure a smooth user experience.

#### Supported Map Format
- Only .properties files are accepted as valid map files.
- The file chooser dialog is restricted to this format to prevent invalid uploads at the source.
- Any file that does not meet the format requirements is rejected before loading.

#### Robust Map Parsing

The map loading pipeline is built with defensive parsing and fault tolerance in mind:

- Invalid coordinate keys or malformed entries are safely skipped.

- Incorrect, missing, or non-numeric tile values automatically fall back to default tile types.

- Missing tiles are filled to ensure a fully initialized map grid.

- Even if the uploaded .properties file contains corrupted data or unreadable content, the game will **never crash**.

If a map cannot be parsed into a valid structure, the system automatically generates a fallback simple map, 
guaranteeing that gameplay can continue without interruption.

#### Automatic Name Validation & Conflict Resolution

To avoid file conflicts and accidental overwrites:

- Uploaded maps are automatically checked for name collisions.

- If a map with the same name already exists, the new map is renamed automatically using a suffix format:
```
map2.properties
map2_1.properties
map2_2.properties
...
```

- This process is fully transparent to the player and requires no manual intervention.

#### User-Friendly Upload Workflow

- Clicking the Upload Map button opens a native file selection dialog, allowing players to browse and select files directly from their local filesystem.

- The dialog uses platform-specific native UI for a seamless experience.

- Once selected, the map is validated, renamed if necessary, and added to the game.

#### Map Management Rules

- **User-uploaded maps** can be freely deleted from the game.

- **Built-in maps** are protected and **cannot be deleted**, ensuring core gameplay content always remains available.

### 5. Mini-Map Visualization System

After a player selects a map, 
the game displays a **mini-map** that provides a compact visual overview of the entire level layout. This feature helps players quickly understand the structure of the map before and during gameplay.

#### Mini-Map Content

The mini-map visually represents key map elements, including:

- Walkable paths, indicating accessible areas

- Walls, marking impassable regions

- Exit tiles, highlighting important navigation points

This allows players to immediately identify routes, obstacles, and the goal location at a glance.

#### Dynamic Size Computation

The mini-map is rendered using the ```MiniMapActor```, which dynamically analyzes the selected map data to determine:

- The overall map dimensions based on tile coordinates

- The required rendering area for the mini-map

- The appropriate tile scaling factor to fit the mini-map within its UI container

#### Automatic Scaling and Layout

To ensure consistent visual quality across different screen sizes and UI layouts:

- The mini-map is **automatically scaled** to fit its allocated display region

- Aspect ratio is preserved to avoid distortion

- The map is centered within the mini-map area when necessary

This design guarantees that the entire map is always visible, readable, and proportionally accurate, regardless of resolution or window size.

### 6. Advanced Lighting System with Dynamic Shader-based Rendering

Our game features an advanced dynamic lighting system that combines shader-based lighting with Y-axis depth sorting to create immersive visual effects. This system enhances the game's nightmare theme by intelligently controlling object visibility based on lighting conditions.

#### Core Components
1. Shader System (light.vert & light.frag)
The lighting system uses custom GLSL shaders to create dynamic lighting effects.
* Dual Visibility Logic: Implements two independent control mechanisms. Includes 
  * `u_minLight`: Minimum brightness level (affects color intensity)
  * `u_minAlpha`: Minimum transparency level (affects object visibility)
* Smooth Transitions: Uses smoothstep for soft lighting edges
* Color Mixing: Blends lighting color with texture colors
* Alpha Discarding: Completely transparent fragments are discarded for optimization

2. LightContext Class (Container for all lighting parameters)
3. LightGroup Enumeration (Categorizes renderable objects into three groups with different lighting behaviors)
```pseudocode
Group	Objects	                               Lighting Behavior
SOLID	Floor tiles, Walls, Environment	       Always visible with u_minAlpha > 0
FADE	Enemies, Keys, Items, Entities	       Fades based on distance (u_minAlpha = 0)
PLAYER	Player character	               Custom lighting with special effects
```

##### Gameplay Integration & Effects
1. Dynamic Light Radius (changes based on game state)
* Normal: Base radius around player
* With Lantern (also key): Extended radius for better exploration
* Danger State: Color shifts when player is hit, strengthen visual effect
2. Exploration Mechanics
* Maze Navigation: Paths and walls remain faintly visible (u_minLight > 0) allowing players to navigate even in darkness
* Lantern as Tool: Acquiring the lantern extends light radius, revealing more of the maze
* Progressive Discovery: Hidden items/enemies only become visible as player approaches
3. Thematic Enhancement
* Nightmare Atmosphere: Enemies fade in from darkness, creating jump-scare potential
* Dream-like Transitions: Smooth alpha transitions for ghostly appearances

### 7. Enemy Targeting / Movement Mechanics

#### 1. BossEnemy

##### Core Attributes

- Movement Speed: 15 world units per frame
- Targeting Range: 100 world units
- Attack Range: 35 world units
- Health Points (HP): 2, Damage Value: 2

##### Targeting Logic

- Prioritizes locking onto the player who enters the targeting range as the target, with a target memory mechanism (`memoryTimer`). If the player temporarily leaves the field of view, it continues chasing in the last known direction (memory duration: 2 seconds).
- Attack Judgment: Triggers the attack animation (8 frames, total duration 0.8 seconds) when the player enters the attack range. Inflicts damage to the player at 0.4 seconds (middle frame) of the animation playback. The attack cooldown only limits the damage frequency, not the animation trigger (to avoid animation stuttering caused by repeated triggers).

##### Movement Mechanism (Core: Shortest Path + Wall Sliding / Collision Correction)

The core of the Boss's movement is **shortest straight-line movement toward the center of the player's collision box**, with multi-layer correction logic for collision scenarios:

1. Basic Movement Logic

   Calculate the vector between its own center (X offset 1 pixel, Y offset 8 pixels) and the center of the player's collision box (X centered, Y offset 15 pixels), normalize the vector, and move at the set speed, prioritizing displacement toward the player.

   

2. Layered Collision Handling

   

   - Step 1: Detect if movement in both X+Y directions collides with obstacles. If no collision occurs, move directly and reset the stuck counter;

   - Step 2: If overall collision occurs, detect X/Y directions separately:

     - Prioritize moving in the direction with a larger displacement amplitude (e.g., move X first if X displacement > Y displacement);
     - If only a single direction is movable (e.g., X clear, Y blocked), move only in that direction;

     

   - Step 3: If both X/Y directions are blocked, attempt reverse correction:

     - X-direction collision → try moving in the reverse X-axis direction; move and decrease the stuck counter if no collision occurs in reverse;
     - Y-direction collision → try moving in the reverse Y-axis direction (same logic as above);

     

   - Step 4: If reverse movement still results in collision, judge as stuck, trigger `handleStuck()` and mark `lastMoveBlocked`;

   

3. Boundary Restrictions

   Detect if the collision box exceeds the map boundary (map width/height × tile size) during movement. If exceeded, directly judge as stuck and do not execute movement;

   

4. Collision Box Characteristics

   The collision box has a fixed width of 4 world units and a Y-axis offset of 5 world units. Update the collision box position after each movement to ensure accurate collision detection;

   

5. Behavior Without Target

   Patrols along a preset path (inheriting the patrol logic from the Enemy base class) when there is no player target, and immediately switches to chasing state once the targeting range is triggered.

   

#### 2. MushroomEnemy

##### Core Attributes

- Movement Speed: 15 world units per frame (same as the player's normal speed)
- Targeting Range: 100 world units, Attack Range: 25 world units
- HP: 1, Damage Value: 1

##### Targeting Logic

- Passive Targeting: When the player enters the targeting range and is in the field of view, the mushroom will not chase but enter the **EVADE state** instead, moving away from the player;
- Memory Mechanism: Remains in the evade state for 2 seconds (`MEMORY_DURATION`) after losing sight of the player, and returns to idle after timeout;
- Idle Behavior: Actively searches for treasure chests in the scene and moves toward the nearest chest when there is no player target.

##### Movement Mechanism

- Movement Method: Jump-based movement (only bound to the Jump animation), collision box width 4 world units, Y-axis offset 5 pixels;
- Evasion Logic: Calculate the vector between itself and the player, move in the reverse normalized direction, and update the last known direction;
- Treasure Chest Tracking: Traverse all treasure chests in the scene, calculate distances, and move straight toward the nearest chest (stops immediately upon collision with obstacles, no obstacle avoidance logic).

#### 3. MimicChest

##### Core Attributes

- Movement Speed: 0 (stationary when disguised as a normal chest)
- Attack Range: 16 world units
- HP / Damage: Integer.MAX_VALUE (one-hit kill level)

##### Targeting Logic

- Disguised State: No active targeting (detection range 0), only activated when the player touches the collision box;
- Behavior After Activation: Immediately enters attack state, locks onto the triggering player as the target, with no target switching logic (unless the player dies / leaves the range).

##### Movement Mechanism

- Collision Box: 4 world units in both width and height, center-aligned; refresh the collision box position every frame update;
- Movement Characteristics: Completely stationary in the disguised phase; triggers an attack animation (3 frames, 0.15 seconds per frame) after activation; no active movement logic, only completes attack judgment through animation frames;
- Attack Trigger: Plays the attack animation when the player touches the collision box, and inflicts one-hit kill damage to the player in the middle of the animation.

#### 4. ChairEnemy

##### Core Attributes

- Dash Speed: 120 world units per frame, Targeting Range: 70 world units
- Attack Range: 20 world units, HP / Damage: 1

##### Targeting Logic

- Patrol + Dash Targeting: Patrols along a single-point preset path when idle; immediately enters dash state when the player enters the 70-world-unit targeting range;
- Field of View Restriction: Due to the "short" collision box, it only has an 8-world-unit field of view, but can expand the search range to 15 world units for 5 seconds through the sound of the player running / breaking blocks.

##### Movement Mechanism

- Dash Logic:

  - After locking onto the player's direction, enters a 0.2-second dash delay (`CHARGE_DELAY`), then dashes at high speed in a straight line;
  - Detects wall collisions during the dash and self-destructs upon hitting a wall (plays the "chair_die" sound effect);

  

- Collision Box: 8 world units wide, 6 world units high, position fully bound to its own coordinates;

- Patrol Behavior: Stops at a single-point path when idle (no multi-path patrol logic), and immediately abandons patrol once targeting is triggered.

#### Treasure Chest Potion Throwing Mechanism

#### 1. Basic Treasure Chest Behavior

The TreasureChest has basic opening animation logic. When the player touches the chest and it is not opened, the opening animation is triggered; after the animation finishes playing, the chest is marked as opened, and the chest opening sound effect is played simultaneously.

#### 2. Potion Throwing Trigger

After the chest is fully opened, the potion throwing logic is triggered:

- Call the `getThrowTargetPosition` method to calculate the throwing target position. Prioritize selecting passable path tiles (`PATH` type Tile) around the chest, randomly choose one of the four directions (up/down/left/right). If that direction is impassable, traverse other directions, and finally fallback to the chest's center position;
- Create a `MagicPotion` instance based on the calculated starting point (chest center) and target position, and mark it as thrown (`isThrown = true`).

#### 3. Potion Throwing Animation and Physics

- The thrown MagicPotion updates its position in the `update` method: calculate the current horizontal displacement by progress with a total throwing duration of 0.5 seconds, and superimpose the parabolic height (reaches a peak of 8 units when progress is 0.5);
- After the throwing progress reaches 100%, mark the potion as non-thrown, fix it at the target position, and complete landing.

#### 4. Potion Collection Rules

- The potion cannot be collected while in the thrown state;
- After the potion lands, if the player collides with the potion's collision boundary, mark the potion as collected, and remove the potion's position from the item position registration list to avoid overlap.

### 8. Advanced Fragment & Endless Mode Wave System
#### Fragment Types and Associations
The game features five fragment types, each tied to specific enemy types that represent different stress sources:

| Fragment  | Associated Enemy | Real-Life Stress Source |
|-----------|------------------|-------------------------|
| Fragment1 | BossEnemy        |    Academic pressure, making mistakes. Mixed with game characters from daily life.                     |
| Fragment2 | MimicChest       | Mushroom shaped Lantern on desktop              |
| Fragment3 | (Unknown)        |  |
| Fragment4 | MushroomEnemy    |  Classroom, chair cringing noise     |
| Fragment5 | ChairEnemy       | Deceptive appearances, false security. Mixed with anime figures from daily life                  |
#### Wave Progression System
The FragmentManager orchestrates a dynamic wave-based system where fragment collection triggers enemy purification and respawn:
```
// Core wave progression logic in FragmentManager
private void processFragmentCollectionComplete(int fragmentType) {
    switch (fragmentType) {
        case 1: // Fragment1 (BossEnemy)
            enemyManager.destroyAllBossEnemies();
            if (endlessMode) {
                fragmentMultiplier[0]++; // Increase wave difficulty
                int nextBossCount = enemyManager.getBossNum() * fragmentMultiplier[0];
                pendingEnemySpawnCount[0] = nextBossCount;
                waitingForEnemyRespawn[0] = true; // Queue respawn
            }
            break;
        // ... similar logic for other fragment types
    }
}
```
#### Respawn Queue System
The EnemyManager implements a sophisticated respawn queue system using `RespawnTask` objects:
```
private static class RespawnTask {
    EnemyType enemyType;  // BOSS, MUSHROOM, or CHAIR
    int count;           // Number to respawn
    float delay;         // Delay in seconds
    float remainingTime; // Countdown timer
    String debugInfo;    // For logging
}
```
##### Queue Processing
* Tasks update every 0.1 seconds (QUEUE_UPDATE_INTERVAL)
* When timer expires, executeRespawnTask() spawns new enemies
* When multiple enemy types need to respawn, a queue is created to prevent overlap for the timer
* System maintains wave integrity while preventing performance spikes
##### Fragment Collection → Purification Cycle
```
[Cycle Begins]
1. Player spawns with initial wave of enemies
2. Fragments appear corresponding to each enemy type
3. Player collects ALL fragments of a specific type
4. → Associated enemy type becomes PURIFIED (disappears)
5. Player gains points
6. [Endless Mode Only] New wave of the associalted enemy type spawns with increased count
7. New fragments appear for next purification cycle
[Cycle Repeats]
```


### 9. Inventory Item Management Mechanism

#### 1. Basic Inventory Structure

- The Inventory consists of a fixed number of InventorySlots, initialized with 8 slots by default, each with a default maximum stack size (99);
- Slots are the basic storage units. Each slot can store a single type of item, recording the item instance, current stack count, and maximum stack size.

#### 2. Item Picking and Stacking

- When picking up items, first traverse existing slots to stack items into slots of the same type that have not reached the maximum stack size, and return the actual stacked quantity;
- If there are still unpicked items, traverse empty slots and place the items into empty slots (the quantity placed at a time does not exceed the maximum stack size of the slot);
- Finally, return the number of remaining unpicked items (when the inventory is full).

#### 3. Item Usage and Quantity Reduction

- When using an item, traverse the inventory slots to find the item with the corresponding name, and call the slot's `removeStack` method to reduce the specified number of items;
- If the item quantity is reduced to 0, automatically clear the item reference of the slot;
- After using the item, trigger the inventory compression logic: move non-empty slots to the left and concentrate empty slots on the right to optimize inventory layout.

#### 4. Core Item Attributes and State Management

- All collectible items inherit from the Item base class, containing core attributes such as position, size, collection status, name, and description;
- Mark the item as collected after collection, and cancel position registration at the same time; item instances support custom collision boundaries, and use their own size as the collision range by default.

### 10. Implementation Overview of Game Console & Command System

#### 1. Overall Architecture Overview

The core of the game console system consists of **Console UI (Console class)**, **Command Contract (Command interface)**, **Command Registry (CommandRegistry)**, **Runtime Variable Storage (ConsoleVariables)**, and various specific commands (e.g., SetCollisionCommand, SetSpeedCommand). The overall process is: the console receives user input → parses commands and parameters → matches the corresponding command instance from the registry → executes the command logic → displays the execution result with the help of ConsoleVariables.

#### 2. Core Component Functions

##### 2.1 Console UI (Console Class)

As the user interaction entry point, it is responsible for:

- Input Handling: Capturing keyboard input, managing input buffers, supporting command history backtracking (up/down keys), cursor blinking, and other interaction logic;
- Command Parsing: Splitting the user-input command line into command name + parameter list, and filtering invalid characters;
- Execution Scheduling: Obtaining command instances through CommandRegistry, calling the execute method to execute, and processing the output display of execution results;
- Rendering Display: Drawing the console panel, output history, input line, and cursor, adapting to screen resolution scaling.

##### 2.2 Command Contract (Command Interface)

Defines a unified specification for all console commands, including four core methods:

- `execute(List<String> args)`: Executes command logic, receives parameter list (excluding command name), and returns execution results;
- `getName()`: Returns the command name (e.g., setcollision, setspeed) for registration and matching;
- `getDescription()`: Returns a brief description of the command for display in the help command;
- `getHelp()`: Returns detailed usage instructions for the command (parameters, examples, notes).

##### 2.3 Command Registry (CommandRegistry)

Adopts the singleton pattern, storing the "command name (lowercase) - command instance" mapping relationship through a HashMap:

- Registration: Registers command instances into the HashMap by name, ensuring case-insensitive names;
- Retrieval: Matches the corresponding command instance from the HashMap according to the command name entered by the user;
- Enumeration: Provides the ability to obtain all registered command names to support the help command in displaying the list of available commands.

##### 2.4 Runtime Variable Storage (ConsoleVariables)

It is the core carrier of the **hash table (ConcurrentHashMap)** in the entire command system, with the following design and functions:

###### (1) Hash Table Selection and Initialization

- Uses `ConcurrentHashMap<String, String>` to store variables at the bottom instead of ordinary HashMap, adapting to the game's multi-threaded scenario (console command thread and game logic thread may read/write variables at the same time) to avoid concurrent modification exceptions;
- Adopts the singleton pattern with a globally unique instance to ensure all commands share the same set of runtime variables.

###### (2) Core Hash Table Operations

- Storage (set method): Trims the Key and ignores empty Keys; converts Null values to empty strings to ensure the standardization of stored data;
- Reading (get method): Reads the original string value by Key, returns Null if undefined;
- Type Parsing (getFloat/getBoolean): Parses the string value into float/boolean on demand, returns the specified default value if parsing fails or the Key does not exist, avoiding null/format exceptions;
- Removal (unset method): Deletes the variable of the specified Key and returns whether the removal is successful;
- Snapshot (snapshot method): Returns an immutable view of the hash table to prevent external modification of internal data.

#### 3. Core Application Scenarios of Hash Table (ConcurrentHashMap)

##### 3.1 Runtime Parameter Persistence

Configuration parameters of all commands are stored in the hash table with "namespace prefix + parameter name" as the Key and stringified numeric/boolean values as the Value. Examples:

|        Command Scenario        |        Hash Table Key        | Value Example |                Description                |
| :----------------------------: | :--------------------------: | :-----------: | :---------------------------------------: |
| Set Boss collision left offset | collision.enemy.boss.offsetX |     -5.0      | Left offset = current value - input value |
| Set player collision box width |    collision.player.width    |     10.0      |      Directly store the width value       |
|    Set Boss movement speed     |       enemy.speed.boss       |     15.0      |           Store the speed value           |
|  Enable infinite player lives  |    player.lives.infinite     |     true      |            Store boolean flag             |

Advantages of this storage method:

- Persistence: After parameters are stored in the hash table, newly generated entities (e.g., refreshed enemies, new props) can directly read the configuration without re-executing commands;
- Traceability: Directly operate the hash table through the var command (var get/set/unset/list), supporting parameter query, modification, deletion, and full list viewing;
- Fallback: Specify default values when reading parameters (e.g., offsetX defaults to 0f) to avoid null exceptions when parameters are not configured.

##### 3.2 Parameter Read/Write Logic During Command Execution

Taking SetCollisionCommand as an example, the hash table usage process:

1. After parameter verification is passed, determine the namespace prefix of the hash table Key according to the "entity type" (e.g., --boss corresponds to collision.enemy.boss.);
2. Read the current value in the hash table according to the "operation type (left/width, etc.)" (e.g., getFloat (prefix + "offsetX", 0f));
3. After calculating the new value, write it into the hash table through the set method (e.g., vars.set (prefix + "offsetX", String.valueOf (newValue)));
4. Call the applyNow method to read the latest value from the hash table and apply it to the entity/prop instances in the game to achieve immediate effect.

##### 3.3 Cross-Command Parameter Sharing

As global storage, the hash table supports parameter sharing among different commands:

- For example, the enemy.speed.boss parameter set by SetSpeedCommand can be read by the initialization logic of Enemy entities in the game, and newly generated Boss enemies will directly use this speed value;
- VarCommand can directly operate parameters stored in the hash table by all commands. For example, query the player's collision box width through `var get collision.player.width`, modify the chair enemy speed through `var set enemy.speed.chair 20`, without relying on specific commands.

##### 3.4 Flexible Handling of Numeric Types

The hash table uniformly stores string-type values instead of directly storing numeric/boolean values, with the following advantages:

- Compatibility: Adapts to the storage of multiple data types such as float, boolean, and integer, without maintaining multiple sets of hash tables for different types;
- Parsability: Parse on demand through getFloat/getBoolean methods, return default values when parsing fails, improving robustness;
- Editability: Parameters entered in the console are strings, direct storage avoids type conversion loss, and also facilitates the var command to directly display the original value.

### 11.Enemy Update Mechanics
- 4=enemy spawn range =path.Randomized, tile-driven density: pick spawn positions by sampling walkable tiles. Map-wide caps prevent overpopulation.
- BossEnemy: Refreshes 1 tile every 50 paths (rounded up).
- MushroomEnemy: Refreshes 1 tile every 50 paths (at least 1, rounded up).
- ChairEnemy: Refresh 1 tile every 80 path tiles (at least 1, rounded up).
- MimicChest: Refreshes 1 tile every 100 "walkable" tiles (rounded up).

### 11. Achievement System

Our game features an engaging achievement system that rewards player progress with visual notifications during gameplay.
When players unlock achievements, they receive immediate visual feedback through animated popups: the dynamic achievement popups.
They can fade-in/out smoothly which can enhance the gaming experience.

