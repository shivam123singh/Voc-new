'use client';

import React, { useState } from 'react';

import { PageWrapper } from '@/components/wrapper';
import { CreateSurveyDialog } from '@/components/create-survey-dialog';
import { Stat } from '@/components/overview-stat';
import { CustomLineChart as LineChart } from '@/components/line-chart';
import DataTable from '@/components/data-table';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { columns } from '../surveys/columns';

import { stats, initialData } from '@/config/dashoard';
import { surveyTableConfig } from '@/config/table-config';

const Dashboard = () => {
  const [analytics] = useState(initialData);

  return (
    <PageWrapper>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl">Hello Chibuzor,</h3>
          <p className="font-light text-grey100 text-[13px]">
            Here is a summary of your dashboard
          </p>
        </div>
        <div>
          <CreateSurveyDialog btnSize="sm" />
        </div>
      </div>
      <Card className="w-full">
        <CardHeader className="flex-row p-3 items-center justify-between">
          <CardTitle className="text-base leading-5">Overview</CardTitle>
          <Select>
            <SelectTrigger className="w-[128px]  border-none font-normal text-sm text-[#222]   focus:ring-0">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Weekly</SelectItem>
              <SelectItem value="month">This month</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <Separator className="my-4" />
        <CardContent className="">
          <div className="flex gap-4 justify-between lg:justify-start lg:gap-16 flex-wrap">
            {stats.slice(0, 3).map((stat) => (
              <Stat
                key={stat.title}
                title={stat.title}
                value={stat.value}
                fontWeight={stat.fontWeight}
                iconColor={stat.iconColor}
                increase={stat.increase}
              />
            ))}
          </div>
          <div className="w-full h-[250] mt-8">
            <LineChart data={analytics} />
          </div>
        </CardContent>
        <Separator className="my-4" />
        <CardContent>
          <div className="flex justify-between w-full gap-8 lg:w-5/6 flex-wrap">
            {stats.slice(3).map((stat) => (
              <Stat
                key={stat.title}
                title={stat.title}
                value={stat.value}
                fontWeight={stat.fontWeight}
                iconColor={stat.iconColor}
                increase={stat.increase}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <div className="my-4">
        <DataTable columns={columns} data={surveyTableConfig.surveyDummy} />
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
