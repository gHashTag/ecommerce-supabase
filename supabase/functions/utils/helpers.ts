export const getPreparedUsers = (usersDataFromNotion: any) => {
  return usersDataFromNotion.map((user: any) => {
    return {
      name: user.properties.Name?.title[0]?.plain_text,
      id: user.properties.Person?.people[0]?.id,
    };
  });
};

export const getPreparedForBaseTasks = (tasks: any) => {
  return tasks.map((task: any) => {
    const [assignee, taskName] = task?.split(": ");
    return { assignee, taskName };
  });
};
