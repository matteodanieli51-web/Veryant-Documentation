## Item Alignment

Memory is organized in such a way that there are natural addressing boundaries (e.g., word boundaries, half-word boundaries, byte boundaries). The way in which data is stored is determined by the object program, and need not respect these natural boundaries.

Data items which are aligned on these natural boundaries are defined to be synchronized. Synchronization can be accomplished in two ways:

1. By use of the [SYNCHRONIZED clause](./Data-Description/SYNCHRONIZED-clause).
2. By recognizing the appropriate natural boundaries and organizing the data suitably without the use of the SYNCHRONIZED clause.

The use of such items within a [group](./Concept-of-Levels/Concept-of-Levels) may affect the results of statements in which the [group](./Concept-of-Levels/Concept-of-Levels) is used as an operand.
