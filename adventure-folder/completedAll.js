function completedAll(adventures, user) {
    for (let i = 0; i < adventures.length; i++) {
        const adventure = adventures[i];
        if (!user.completed[adventure.id]) {
            return false;
        }
    }
    return true;
}

export default completedAll;