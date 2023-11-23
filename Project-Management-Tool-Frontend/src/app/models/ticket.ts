enum TicketPriority {
  Low,
  Medium,
  High,
}

enum TicketStatus {
  NotStarted,
  InProgress,
  Completed,
  Archived,
}

interface Ticket {
  ticketId: number;
  ticketName: string;
  ticketDescription?: string;
  ticketPriority: TicketPriority;
  ticketStatus: TicketStatus;
  ticketProgress?: number;
}
