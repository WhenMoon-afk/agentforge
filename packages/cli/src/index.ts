/**
 * Substratia CLI - Programmatic API
 * For most use cases, use @substratia/memory instead.
 * This package is primarily for CLI usage.
 */

export const VERSION = "0.1.0";
export const API_URL = "https://aware-pony-419.convex.site";

// Re-export for programmatic access if needed
export { readFileSync, writeFileSync, existsSync } from "fs";
export { homedir } from "os";
export { join } from "path";
