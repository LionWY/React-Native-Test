//
//  ViewController.m
//  Jump
//
//  Created by FOODING on 16/12/1451.
//  Copyright © 2016年 Noohle. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"
#import "AppDelegate.h"
#import "NativeViewController.h"
#import "RNViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UITextField *TF;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    app.navi = self.navigationController;
    
}

- (IBAction)click:(id)sender {
    
    RNViewController *vc = [[RNViewController alloc] init];
    vc.title = @"N-VC RN-View";
    vc.textString = self.TF.text;
    [self.navigationController pushViewController:vc animated:YES];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
