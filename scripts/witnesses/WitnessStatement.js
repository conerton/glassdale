export const Witness = (witness) => {
    return `
        <div class="witness">
            <h3>${witness.name}</h3>
            <p>Statement: ${witness.statements}</p>
        </div>
    `
  }