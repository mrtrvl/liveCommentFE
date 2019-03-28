export interface Message {
  id: String;
  message: String;
  sender: String;
  approved: Boolean;
  timestamp: Date;
}

export interface Messages {
  success: Boolean;
  message: Message [];
}
