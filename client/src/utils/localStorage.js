export const getSavedRequestIds = () => {
  const savedRequestIds = localStorage.getItem("saved_requests")
    ? JSON.parse(localStorage.getItem("saved_requests"))
    : [];

  return savedBookIds;
};

export const saveRequestId = (requestIdArr) => {
  if (requestIdArr.length) {
    localStorage.setItem("saved_requests", JSON.stringify(requestIdArr));
  } else {
    localStorage.removeItem("saved_requests");
  }
};

export const removeRequestId = (requestId) => {
    const savedRequestIds = localStorage.getItem("saved_requests")
        ? JSON.parse(localStorage.getItem("saved_requests"))
        : null;

    if (!savedRequestIds) {
        return false;
    }

    const updatedSavedRequestIds = savedRequestIds.filter((savedRequestId) => savedRequestId !== requestId);
    localStorage.setItem("saved_requests", JSON.stringify(updatedSavedRequestIds));

    return true;
};