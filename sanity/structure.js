// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("blog").title("Posts"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["blog"].includes(item.getId())
      )
    ]);
