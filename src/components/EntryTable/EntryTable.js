import EntryRow from "./EntryRow";

export default function EntryTable({ entries }) {
  const rows = [];
  entries.forEach((entry) => {
    rows.push(
      <EntryRow
      entry={entry}
      tags={entry.tags} />
    );
  });
  
  return (
    <div class="entry-table">
      {rows}
    </div>
  );
};