# Rasin's Lightweight HUD (RLHUD)

**A lightweight, all-in-one PvP HUD suite for Minecraft Java Edition.**

> [!WARNING]
> **Work in Progress (WIP)**
>
> RLHUD is under active development. Features may be incomplete, buggy, incorrectly displayed, or unavailable. Expect breaking changes while the project evolves.

## About

Rasin's Lightweight HUD (RLHUD) aims to bring useful PvP information, HUD customization, and combat-related displays together in one lightweight client-side mod.

The goal is to provide a configurable, resource-conscious experience for players who want useful information without unnecessary visual clutter.

## Project Goals

- **All-in-one PvP suite:** Bring multiple HUD modules together in one mod.
- **Lightweight design:** Minimize unnecessary rendering and resource usage.
- **Customizable interface:** Work toward configurable positions, colors, scaling, and visibility.
- **Combat information:** Support useful displays for sword, axe, mace, and spear combat.
- **Standalone distribution:** Aim for a single distributable JAR without required third-party runtime mod dependencies.

## Planned Features

The following features represent project goals, not a guarantee that they are currently implemented.

- [ ] Armor durability HUD
- [ ] Keystrokes display
- [ ] CPS counter
- [ ] FPS and ping display
- [ ] Customizable HUD positions and appearance
- [ ] Individual module toggles
- [ ] Persistent settings
- [ ] In-game configuration screen
- [ ] Additional PvP information modules
- [ ] Performance and compatibility testing

Feature availability will change as development progresses.

## Compatibility

| Component | Target |
|---|---|
| Minecraft Java Edition | 1.21.11 |
| Mod loader | Fabric |
| Fabric Loader | 0.19.5 |
| Java | 21 |
| Development environment | VS Code |
| Primary performance target | Lower-end hardware |

Compatibility with other Minecraft versions, loaders, and mod combinations has not been established.

## Current Status

RLHUD is in its early development stage.

**Known limitations and risks:**

- HUD rendering and feature behavior require testing in-game.
- The API and mappings must remain compatible with the selected Minecraft and Fabric versions.
- Some planned modules have not been implemented.
- Performance on lower-end hardware has not been benchmarked.
- Compatibility with other client-side mods is not yet verified.
- Configuration and persistence features may be incomplete or absent.
- Build and launch success must be verified for each release.

Do not assume a planned feature is functional simply because it appears in this README.

## Building from Source

1. Install a compatible JDK and the required development tools.
2. Clone or download the repository.
3. Open the project in VS Code or another compatible IDE.
4. Ensure the Gradle wrapper and project configuration use compatible versions of Java, Fabric Loom, Minecraft, and Fabric API.
5. Run the Gradle build.

On Windows, from the project root:

```bat
gradlew.bat build
```

The generated JAR should appear in `build/libs/` if the build succeeds.

## Installation

1. Build RLHUD or obtain a JAR from a trusted project release.
2. Install the matching Minecraft and Fabric versions.
3. Install Fabric API if the build requires it.
4. Place the RLHUD JAR in the appropriate Minecraft instance's `mods` folder.
5. Launch Minecraft and check for errors if the mod does not load.

Use backups when testing development builds.

## Contributing

Contributions, bug reports, and constructive suggestions are welcome.

Before submitting changes:

- Explain the problem or feature being addressed.
- Keep compatibility with the project's target versions in mind.
- Test changes where possible.
- Clearly identify untested behavior.

## License

RLHUD is distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

**RLHUD — useful information, less clutter.**

Created by Sahil Rasin (sahilisrasin). Built in progress, one feature at a time.
