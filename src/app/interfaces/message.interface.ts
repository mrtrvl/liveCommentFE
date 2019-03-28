export interface Message {
  id: String;
  message: String;
  sender: String;
  approved: Boolean;
}

export interface Messages {
  messages: Message [];
}
