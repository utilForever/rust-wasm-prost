await import_wasm().catch(e => console.error("Error importing `index.ts`:", e));

export function import_wasm() {
    return import("./index");
}
