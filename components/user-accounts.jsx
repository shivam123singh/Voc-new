'use client';
import { useState, Fragment } from 'react';
import { MoreVertical } from 'lucide-react';
import CreateUserForm from '@/components/create-user-form';
import { EmptyPlaceholder } from '@/components/empty-placeholder';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';
import DataTable from './data-table';
import { cn } from '@/lib/utils';

export const columns = [
  {
    accessorKey: 'first_name',
    header: 'First Name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const data = [
  {
    name: 'SURVEYS',
    questions: [
      { id: 1, text: 'Can view survey', admin: true, user: false },
      { id: 2, text: 'Can create survey', admin: false, user: true },
      // Add more questions for SURVEYS
    ],
  },
  {
    name: 'USERS',
    questions: [
      { id: 3, text: 'Can view user', admin: false, user: true },
      { id: 4, text: 'Can create user', admin: true, user: true },
      // Add more questions for USERS
    ],
  },
];

const UserAccounts = ({ className, ...props }) => {
  const [users] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (groupIndex, questionIndex, role) => {
    // Update the checkbox value here based on the role (admin or user)
    // You can modify your data state accordingly
    console.log(groupIndex, questionIndex, role);
  };

  const renderUsers = () => (
    <div className={cn('relative', className)} {...props}>
      {users.length > 0 ? (
        <>
          <Tabs defaultValue="users" className="">
            <TabsList>
              <TabsTrigger className="gap-2" value="users">
                <span>Users</span>
                <span>8</span>
              </TabsTrigger>
              <TabsTrigger className="gap-2" value="roles">
                <span>Roles</span>
                <span>2</span>
              </TabsTrigger>{' '}
            </TabsList>
            <TabsContent value="users">
              <div className="absolute top-0 right-0">
                <Button className="font-normal w-full" size="sm">
                  Add a user
                </Button>
              </div>
              <DataTable
                className="bg-transparent"
                columns={columns}
                data={users}
              />
            </TabsContent>
            <TabsContent value="roles">
              <div className="absolute top-0 right-0">
                <Button className="font-normal w-full" size="sm">
                  Add a role
                </Button>
              </div>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-2 text-table-foreground-heading text-sm font-medium">
                      Privilege
                    </th>
                    <th className="text-left px-4 py-2 text-table-foreground-heading text-sm font-medium">
                      Admin
                    </th>
                    <th className="text-left px-4 py-2 text-table-foreground-heading text-sm font-medium">
                      User
                    </th>
                  </tr>
                </thead>
                <tbody className="&_tr:last-child]:border-0">
                  {data.map((group) => (
                    <Fragment key={group.name}>
                      <tr>
                        <td
                          colSpan={3}
                          className="bg-[#2E2C34BF]/25 px-4 py-2  text-table-foreground"
                        >
                          {group.name}
                        </td>
                      </tr>
                      {group.questions.map((question, questionIndex) => (
                        <tr
                          key={question.id}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="px-4 py-4">{question.text}</td>
                          <td className="px-4 py-4">
                            <input
                              type="checkbox"
                              checked={question.admin}
                              onChange={() =>
                                handleChange(groupIndex, questionIndex, 'admin')
                              }
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              type="checkbox"
                              checked={question.user}
                              onChange={() =>
                                handleChange(groupIndex, questionIndex, 'user')
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="documents" />
          <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Invite a user to become an admin
          </EmptyPlaceholder.Description>
          <Button
            className="font-normal w-full"
            onClick={() => setShowForm(true)}
            size="sm"
          >
            Invite a user
          </Button>
        </EmptyPlaceholder>
      )}
    </div>
  );
  return <>{showForm ? <CreateUserForm /> : renderUsers()}</>;
};

export default UserAccounts;
