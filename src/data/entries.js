import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getEntries(q) {
    let entries = ENTRIES;
    if (!entries) entries = [];
    if (q) {
        entries = matchSorter(entries, q, {keys: ["title", "tags"]});
    }

    return entries.sort(sortBy("id"));
}

export function getEntry(entryId) {
    const entry = ENTRIES.filter(e => e.id === entryId)[0];

    return new EntryData(
        entry.id,
        entry.title,
        entry.tags,
        "Today",
        "Something"
    );
}

// Add Date Field
let ENTRIES = [
    {title: "Morning Hike at Mailbox", tags: "Hiking", id: "001"},
    {title: "Evening Hike at Si", tags: "Hiking",  id: "002"},
    {title: "Training at Cap Hill Steps", tags: "Training", id: "003"},
    {title: "Training run", tags: "Training", id: "004"}
];

// Page end result, title, tags and summary can be used in the home page / search
let content = [
    {
        title: "TITLE",
        tags: ["a", "b", "c"],
        summary: { // Optional
            type: "Type", // Defines summary card type to display
            distance: 123,
            time: 213,
            elevation: 312,
        },
        content: [ // Displays text/images in 
            {
                type: "text", // Defines what type of content to display
                details: "Firt paragraph..."
            },
            {
                type: "photo",
                url: "https://imgur.com/etc",
                caption: "A photo from today", // Optional
                wrap: "inline" // Optional
            },
            {
                type: "text",
                details: "Second paragraph..."
            },
            {
                type: "heading",
                details: "Sub heading for section..."
            },
            {
                type: "text",
                details: "third paragraph..."
            },
            {
                type: "quote", // Not sure if I'll use this but there is potential for other things
                details: "some quote..."
            },
        ]
    }
]

class EntryData {
    constructor(id, title, tags, date, content) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.date = date;
        this.content = content;
    }
}