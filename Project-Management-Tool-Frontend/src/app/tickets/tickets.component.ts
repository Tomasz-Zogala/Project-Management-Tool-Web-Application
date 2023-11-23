import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  tickets: Ticket[] = [ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7, ticket8, ticket9, ticket10, ticket11, ticket12];

  getStatusName(status: TicketStatus): string {
    return TicketStatus[status];
  }

  getPriorityName(status: TicketPriority): string {
    return TicketPriority[status];
  }
}

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
  ticketDescription: string;
  ticketPriority: TicketPriority;
  ticketStatus: TicketStatus;
  ticketProgress?: number;
}

const ticket1: Ticket =   {
    ticketId: 1,
    ticketName: "Task 1",
    ticketPriority: TicketPriority.Low,
    ticketStatus: TicketStatus.NotStarted,
    ticketDescription: "Description for Task 1",
    ticketProgress: 25,
};

const ticket2: Ticket =   {
  ticketId: 2,
  ticketName: "Task 2",
  ticketPriority: TicketPriority.Medium,
  ticketStatus: TicketStatus.InProgress,
  ticketDescription: "Description for Task 2",
  ticketProgress: 50,
};

const ticket3: Ticket =   {
  ticketId: 3,
  ticketName: "Task 3",
  ticketPriority: TicketPriority.High,
  ticketStatus: TicketStatus.Completed,
  ticketDescription: "Description for Task 3",
  ticketProgress: 100,
};

const ticket4: Ticket =   {
  ticketId: 4,
  ticketName: "Task 4",
  ticketPriority: TicketPriority.Low,
  ticketStatus: TicketStatus.Archived,
  ticketDescription: "Description for Task 4",
};

const ticket5: Ticket =   {
  ticketId: 5,
  ticketName: "Task 5",
  ticketPriority: TicketPriority.High,
  ticketStatus: TicketStatus.NotStarted,
  ticketDescription: "Description for Task 5",
};

const ticket6: Ticket =   {
  ticketId: 6,
  ticketName: "Task 6",
  ticketPriority: TicketPriority.Medium,
  ticketStatus: TicketStatus.InProgress,
  ticketDescription: "Description for Task 6",
  ticketProgress: 75,
};

const ticket7: Ticket =   {
  ticketId: 7,
  ticketName: "Task 7",
  ticketPriority: TicketPriority.Low,
  ticketStatus: TicketStatus.Completed,
  ticketProgress: 100,
  ticketDescription: "Description for Task 7",
};

const ticket8: Ticket =   {
  ticketId: 8,
  ticketName: "Task 8",
  ticketPriority: TicketPriority.Medium,
  ticketStatus: TicketStatus.NotStarted,
  ticketDescription: "Description for Task 8",
};

const ticket9: Ticket =   {
  ticketId: 9,
  ticketName: "Task 9",
  ticketPriority: TicketPriority.High,
  ticketStatus: TicketStatus.InProgress,
  ticketDescription: "Description for Task 9",
};

const ticket10: Ticket =   {
  ticketId: 10,
  ticketName: "Task 10",
  ticketPriority: TicketPriority.Low,
  ticketStatus: TicketStatus.Archived,
  ticketDescription: "Description for Task 10",
};

const ticket11: Ticket =   {
  ticketId: 11,
  ticketName: "Task 11",
  ticketPriority: TicketPriority.High,
  ticketStatus: TicketStatus.Completed,
  ticketProgress: 50,
  ticketDescription: "Description for Task 11",
};

const ticket12: Ticket =   {
  ticketId: 12,
  ticketName: "Task 12",
  ticketPriority: TicketPriority.Medium,
  ticketStatus: TicketStatus.InProgress,
  ticketDescription: "Description for Task 12",
};
