import * as React from 'react';
import {
    Box, Button, Divider, FormControl, FormLabel, Input, Stack, CardContent, Grid,
    Select, Option, Typography, Tab, Tabs, TabPanel, TabList, tabClasses, Card, CardActions, CardOverflow,
    Table, 
} from '@mui/joy';
import { Container } from '@mui/system';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function MyProfile() {

    const StartNow = (price, color) => {
        if (price === "$0.00 p/m") {
            return 
        }

        return (
            <>
                <Button
                    variant="outlined"
                    color={color}
                    endDecorator={<KeyboardArrowRight />}
                >
                    Start now
                </Button>
            </>
        )

    };

    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                position: 'sticky',
                top: { sm: -100, md: -110 },
                bgcolor: 'background.body',
                zIndex: 9995,
                }}
            >
                <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' }}>
                    <TabList
                        disableUnderline

                        tabFlex={1}
                        size="sm"

                        sx={{
                            p: 0.5,
                            gap: 0.5,
                            borderRadius: 'xl',
                            bgcolor: 'background.surface',
                            [`& .${tabClasses.root}[aria-selected="true"]`]: {
                                fontWeight: '600',
                                boxShadow: 'sm',
                                bgcolor: 'background.level1',
                            },
                        }}
                    >
                        <Tab disableIndicator value={0}>
                            Personal info
                        </Tab>
                        <Tab disableIndicator value={1}>
                            Security
                        </Tab>
                        <Tab disableIndicator value={2}>
                            Billing
                        </Tab>
                    </TabList>
                    <TabPanel value={0}>
                        <Stack
                            spacing={4}
                            sx={{
                            display: 'flex',
                            maxWidth: '800px',
                            mx: 'auto',
                            px: { xs: 2, md: 6 },
                            py: { xs: 2, md: 3 },
                            }}
                        >
                            <Card>
                                <Box sx={{ mb: 1 }}>
                                    <Typography level="title-md">Personal info</Typography>
                                    <Typography level="body-sm">
                                    Customize how your profile information will apper to the networks.
                                    </Typography>
                                </Box>
                                <Divider />
                                <Stack
                                    direction="row"
                                    spacing={3}
                                    sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                                >
                                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                        <div>
                                        <Stack spacing={2}>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }} >
                                                <Input size="sm" placeholder="First name" />
                                                <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
                                            </FormControl>
                                        </Stack>
                                        <Stack direction="row" spacing={2}>
                                            <FormControl>
                                                <FormLabel>Role</FormLabel>
                                                <Input size="sm" defaultValue="UI Developer" />
                                            </FormControl>
                                            <FormControl sx={{ flexGrow: 1 }}>
                                                <FormLabel>Email</FormLabel>
                                                <Input
                                                    size="sm"
                                                    type="email"
                                                    startDecorator={<EmailRoundedIcon />}
                                                    placeholder="email"
                                                    defaultValue="siriwatk@test.com"
                                                    sx={{ flexGrow: 1 }}
                                                />
                                            </FormControl>
                                        </Stack>
                                        </div>
                                        <div>
                                            <FormControl sx={{ display: { sm: 'contents' } }}>
                                            <FormLabel>Timezone</FormLabel>
                                            <Select
                                                size="sm"
                                                startDecorator={<AccessTimeFilledRoundedIcon />}
                                                defaultValue="1"
                                            >
                                                <Option value="1">
                                                    Indochina Time (Bangkok){' '}
                                                    <Typography textColor="text.tertiary" ml={0.5}>
                                                        — GMT+07:00
                                                    </Typography>
                                                </Option>
                                                <Option value="2">
                                                    Indochina Time (Ho Chi Minh City){' '}
                                                    <Typography textColor="text.tertiary" ml={0.5}>
                                                        — GMT+07:00
                                                    </Typography>
                                                </Option>
                                            </Select>
                                            </FormControl>
                                        </div>
                                    </Stack>
                                </Stack>
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl
                                            sx={{
                                                display: {
                                                sm: 'flex-column',
                                                md: 'flex-row',
                                                },
                                                gap: 2,
                                            }}
                                            >
                                            <Input size="sm" placeholder="First name" />
                                            <Input size="sm" placeholder="Last name" />
                                            </FormControl>
                                        </Stack>
                                    </Stack>
                                    <FormControl>
                                        <FormLabel>Role</FormLabel>
                                        <Input size="sm" defaultValue="UI Developer" />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            size="sm"
                                            type="email"
                                            startDecorator={<EmailRoundedIcon />}
                                            placeholder="email"
                                            defaultValue="siriwatk@test.com"
                                            sx={{ flexGrow: 1 }}
                                        />
                                    </FormControl>
                                    <div>
                                    <FormControl sx={{ display: { sm: 'contents' } }}>
                                        <FormLabel>Timezone</FormLabel>
                                        <Select
                                        size="sm"
                                        startDecorator={<AccessTimeFilledRoundedIcon />}
                                        defaultValue="1"
                                        >
                                        <Option value="1">
                                            Indochina Time (Bangkok){' '}
                                            <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                            </Typography>
                                        </Option>
                                        <Option value="2">
                                            Indochina Time (Ho Chi Minh City){' '}
                                            <Typography textColor="text.tertiary" ml={0.5}>
                                            — GMT+07:00
                                            </Typography>
                                        </Option>
                                        </Select>
                                    </FormControl>
                                    </div>
                                </Stack>
                                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                                    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                    <Button size="sm" variant="outlined">
                                        Update
                                    </Button>
                                    </CardActions>
                                </CardOverflow>
                            </Card>
                        </Stack>
                    </TabPanel>

                    <TabPanel value={1}>
                        
                        <Stack
                            spacing={4}
                            sx={{
                            display: 'flex',
                            maxWidth: '800px',
                            mx: 'auto',
                            px: { xs: 2, md: 6 },
                            py: { xs: 2, md: 3 },
                            }}
                        >
                            <Card>
                                <Box sx={{ mb: 1 }}>
                                    <Typography level="title-md">Change Password</Typography>
                                </Box>
                                <Divider />
                                <Stack
                                    direction="row"
                                    spacing={3}
                                    sx={{ display: { xs: 'flex', md: 'flex' }, my: 1 }}
                                >
                                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                        <div>
                                        <Stack spacing={2}>
                                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }} >
                                                <FormLabel>Old Password</FormLabel>
                                                <Input size="sm" placeholder="Old Password" sx={{ flexGrow: 1 }}/>
                                            </FormControl>
                                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }} >
                                                <FormLabel>New Password</FormLabel>
                                                <Input size="sm" placeholder="New Password" sx={{ flexGrow: 1 }}/>
                                            </FormControl>
                                            <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }} >
                                                <FormLabel>Confirm New Password</FormLabel>
                                                <Input size="sm" placeholder="Confirm New Password" sx={{ flexGrow: 1 }}/>
                                            </FormControl>
                                        </Stack>
                                        </div>
                                    </Stack>
                                </Stack>
                                <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                                    <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                                    <Button size="sm" variant="outlined">
                                        Change Password
                                    </Button>
                                    </CardActions>
                                </CardOverflow>
                            </Card>
                        </Stack>

                    </TabPanel>
                    
                    <TabPanel value={2}>
                        
                        <Card>
                            <Box sx={{ mb: 1 }}>
                                <Typography level="title-md">Change Password</Typography>
                            </Box>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                sx={{ flexGrow: 1 }}
                                >
                                {itemData.map((item) => (
                                    <Grid xs={12} sm={6} md={3} key={item}>
                                        <Card variant="outlined" color={item.color} sx={{ maxWidth:320 }}>
                                            <CardContent>
                                                <Typography level="title-md" color={item.color}>
                                                        {item.title}
                                                </Typography>

                                                <Typography level="body-sm" color={item.color}>{item.price}
                                                </Typography>
                                            </CardContent>

                                            <CardActions>
                                                <Typography level="title-lg" sx={{ mr: 'auto' }} color={item.color}>
                                                    {item.price}
                                                </Typography>
                                                {StartNow(item.price, item.color)}
                                            </CardActions>
                                            <CardOverflow variant="soft">
                                                <Divider inset="context" />
                                                <CardContent orientation="horizontal">
                                                    <Typography level="body-xs" color={item.color}>{item.subscription}</Typography>
                                                </CardContent>
                                            </CardOverflow>
                                        </Card>
                                    </Grid>

                                ))}
                            </Grid>
                            {/* </Card>
                            <Card> */}
                            <Container maxWidth="sm" sx={{pt: 8}}>
                                <Typography level="title-lg" >
                                    Previous Subscriptions
                                </Typography>

                                <Table aria-label="basic table" sx={{pt: 1}}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
                                            <th>Calories</th>
                                            <th>Fat&nbsp;(g)</th>
                                            <th>Carbs&nbsp;(g)</th>
                                            <th>Protein&nbsp;(g)</th>
                                        </tr>
                                    </thead>
                                    {tableItems.map((item) => (
                                        <><tbody>
                                            <tr>
                                                <td>{item.dessert}</td>
                                                <td>{item.calories}</td>
                                                <td>{item.fat}</td>
                                                <td>{item.carbs}</td>
                                                <td>{item.protein}</td>
                                            </tr>
                                        </tbody></>
                                    ))},
                                </Table>
                            </Container>
                        </Card>
                    </TabPanel>
                </Tabs>
            </Box>
        </Box>
    );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'FREE',
      subscription: 'Using now',
      price: '$0.00 p/m',
      color:"neutral"
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'BASIC',
      subscription: '',
      price: '$9.99 p/m',
      color:"primary"
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'GOLDEN',
      subscription: '',
      price: '$14.99 p/m',
      color:"danger"
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'ULTIMATE',
      subscription: '',
      price: '$100.00 once off',
      color:"warning"
    },
];
const tableItems = [
    {
        dessert: 'Frozen yoghurt',
        calories: '159',
        fat: '6',
        carbs: '24',
        protein: '4'

    }
];