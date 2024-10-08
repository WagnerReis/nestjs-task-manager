export type TaskUserRequestDTO = {
  userId: string;
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  priority: 'BAIXA' | 'MEDIA' | 'ALTA';
  status: 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDA';
};

export type TaskUserResponseDTO = {
  id: string;
};

type TaskDTO = {
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
};

type UserDTO = {
  id: string;
  username: string;
  name: string;
  email: string;
  createdAt: Date;
  avatarUrl: string | null;
};

export type TaskUserNotificationDTO = {
  id: string;
  userId: string;
  taskId: string;
  createdAt: Date;
  task: TaskDTO;
  user: UserDTO;
};
