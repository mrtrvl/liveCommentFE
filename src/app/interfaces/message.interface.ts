export interface Message {
  id: String;
  message: String;
  sender: String;
  approved: Boolean;
}

export interface Messages {
  success: Boolean;
  message: Message [];
}
