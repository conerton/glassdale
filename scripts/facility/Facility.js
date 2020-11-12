export const Facility = (facility, criminal) => {
    return `
        <div class="facility">
            <h3>${facility.facilityName}</h3>
            <p>${criminal.name}</p>
        </div>
    `
  }
