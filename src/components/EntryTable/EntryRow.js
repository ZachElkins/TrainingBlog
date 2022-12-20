import { useNavigate } from "react-router-dom"

export default function EntryRow({ entry }) {

  const navigate = useNavigate();
  const handleOnClick = (entryId) => navigate(`/entries/${entryId}`);

  return (
    <div class="entry-row"  onClick={() => handleOnClick(entry.id)}>
      <div>
       {entry.title} 
      </div>
    </div>
  );
}