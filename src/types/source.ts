/**
 * Source provenance model.
 * Every factual claim in Fruitypedia traces back to a Source record.
 *
 * @see Fruitypedia_Project_Plan §19.4
 */

export interface Source {
  /** Unique identifier for this source, referenced by `sourceIds` throughout the data model. */
  id: string;
  /** Human-readable title of the source document/database. */
  title: string;
  /** Publishing organization or authority. */
  publisher: string;
  /** Canonical URL to the source. */
  url: string;
  /** ISO 8601 date string when this source was last accessed. */
  accessedAt: string;
  /** Provider-specific reference ID (e.g., USDA FDC ID). */
  referenceId?: string;
  /** Edition or version of the source (e.g., "SR Legacy", "Foundation Foods"). */
  edition?: string;
}
