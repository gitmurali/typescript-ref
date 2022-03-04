// Drag & Drop interfaces

namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
  }
}
